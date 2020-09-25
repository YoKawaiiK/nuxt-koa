'use strict'

// Library
const Koa = require('koa')

// router
const router = require('./router/index')

const app = new Koa()

// koa used router
app.use(router.routes())
    .use(router.allowedMethods());


// export server in nuxt.config.js
module.exports = {
    path: '/api',
    handler: app.callback()
}