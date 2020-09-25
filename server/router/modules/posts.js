const Router = require('koa-router')

const posts = new Router({prefix: '/posts'})

posts
    .get('/get', async ctx => {
        ctx.body = {data: [1, 2, 3]}
    })

module.exports = posts