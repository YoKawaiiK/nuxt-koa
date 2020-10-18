const Router = require('koa-router')
// const jwt = require('jsonwebtoken')

const db = require('../../database/index')

const posts = new Router({prefix: '/posts'})

posts
    // Получить 1 пост
    .get('/post/:login/:last_post_id', async ctx => {
        try {
            const last_post_id = ctx.request.params.last_post_id
            const login = ctx.request.params.login

            const checkUser = await db.query(`
                SELECT user_id
                FROM users
                WHERE 
                    login = '${login}'
            `)
            if (checkUser[0][0] == null) {
                ctx.body = { userNotFound: true }
                return
            }


            const getLastPost = await db.query(`
                SELECT 
                    post_id,
                    text,
                    date_format(date, '%d.%m.%Y %H:%i') AS date, 
                    user_id
                FROM 
                    posts as P
                WHERE P.post_id < '${last_post_id}' AND
                    P.user_id = '${checkUser[0][0].user_id}'
                ORDER BY P.date DESC 
                LIMIT 1;
            `)
            if (!getLastPost[0][0] == null) {
                ctx.body = { postEmpty: true }
                return
            }

            ctx.body = { post: getLastPost[0][0] }
            ctx.status = 200
        } 
        catch (error) {
            console.log(error);
            ctx.body = { error: true }
            return
        }
    })
    .get('/posts/:login/:pagination', async ctx => {
        const postsPerPage = process.env.POSTS_PER_PAGE;
        
        const login = ctx.params.login;
        const pagination = ctx.params.pagination
        try {
            let sqlCheckUser = `
                SELECT user_id, login, CONCAT(given_name, ' ', family_name) as name
                FROM users
                WHERE 
                login = 
            `
            // Проверка логин на число
            if (/^-?\d+$/.test(login)) {
                sqlCheckUser += `${login}`
            } 
            else {
                sqlCheckUser += `'${login}'`
            }
            const checkUser = await db.query(sqlCheckUser)
            if (checkUser[0][0] == null) {
                ctx.body = {userNotFound: true}
                return
            }

            const getPosts = await db.query(`
                SELECT 
                    post_id,
                    text,
                    date_format(date, '%d.%m.%Y %H:%i') AS date, 
                    user_id
                FROM posts as P
                WHERE 
                    P.user_id = '${checkUser[0][0].user_id}' 
                ORDER BY P.date DESC
                LIMIT ${(pagination * postsPerPage) - postsPerPage}, ${postsPerPage}
            `)
            const postsTotal = await db.query(`
                SELECT 
                COUNT(post_id) as postsTotal
                FROM posts
                WHERE user_id = ${checkUser[0][0].user_id}
            `)

            if (getPosts[0][0] == null) {
                ctx.body = { 
                    empty: true,
                    user: checkUser[0][0]
                }
            }
            else {
                
                ctx.body = { 
                    posts: getPosts[0],
                    user: checkUser[0][0],
                    postsTotal: postsTotal[0][0].postsTotal
                }
            }
        } 
        catch (error) {
          console.log(error);  
          ctx.body = {errorDB: true}
        }
    })
    .post('/post/delete', async ctx => { 
        const post_id = ctx.request.body.post_id
        const user = ctx.state.user
        // console.log(user);
        if (typeof user == 'undefined') {
            ctx.body = { auth: false }
            ctx.redirect('/api/auth/cookies/delete')
            return
        }

        
        try {
            const deletePost = await db.query(`
                DELETE FROM posts 
                WHERE post_id = '${post_id}' AND
                    user_id = '${user.user_id}'

            `)
            // Если ошибка
            if (deletePost[0].warningStatus != 0) {
                throw new Error('Error db')
            } 
            // Без ошибки
            else {
                ctx.body = {delete: true}
                return 
            }
        } 
        catch (error) {
            console.log(error);
            ctx.body = {error: true}
            return
        }
    })
    
    .post('/post/insert', async ctx => {
        const user= ctx.state.user
        if (typeof user == 'undefined') {
            ctx.body = { auth: false }
            ctx.redirect('/api/auth/cookies/delete')
            return
        }

        const post = ctx.request.body.post;

        try {
            const insertPost = await db.query(`
                INSERT INTO posts
                    (text, user_id) 
                VALUES (
                    '${post.text}', 
                    '${user.user_id}'
                );
            `)
            if (insertPost[0].warningStatus != 0) {
                throw new Error('Error DB')
            }
            const selectPost = await db.query(`
                SELECT 
                    post_id,
                    text,
                    date_format(date, '%d.%m.%Y %H:%i') AS date, 
                    user_id
                FROM 
                    posts as P
                WHERE P.post_id = '${insertPost[0].insertId}' 
            `)
            ctx.body = {post: selectPost[0][0]}
            ctx.status = 200
        } 
        catch (error) {
            console.log(error);
            ctx.body = {error: true}
            return
        }
    })

    .post('/post/update', async ctx => {
        const user = ctx.state.user
        if (typeof user == 'undefined') {
            ctx.body = { auth: false }
            ctx.redirect('/api/auth/cookies/delete')
            return
        }

        const post = ctx.request.body.post
        try {
            const updatePost = await db.query(`
                UPDATE posts 
                SET text = '${post.text}' 
                WHERE post_id = '${post.post_id}' AND
                    user_id = '${user.user_id}'
            `)
            if (updatePost[0].warningStatus != 0) {
                throw new Error('Error DB update')
            }
            ctx.body = { update: true }
        } 
        catch (error) {
            console.log(error);
            ctx.body = { error: true }
            return
        }
    })


module.exports = posts