const Router = require('koa-router')

// this router in ./modules
const posts = require('./modules/posts')

const indexRouter = new Router()
// add all router
const mainRouter = [posts]

for (const router of mainRouter) {
    indexRouter.use(router.routes()) 
        .use(router.allowedMethods())
};

module.exports = indexRouter;