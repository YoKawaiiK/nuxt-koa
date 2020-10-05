'use strict'

// Library
const Koa = require('koa')

const passport = require('koa-passport')
require('./passport/index')

const bodyParser = require('koa-bodyparser')

// router
const router = require('./router/index')


const app = new Koa()

// koa used router
app
    .use(bodyParser())
    .use(passport.initialize())
    
    .use(router.routes())
    .use(router.allowedMethods())


// export server in nuxt.config.js
module.exports = {
    path: '/api',
    handler: app.callback()
}