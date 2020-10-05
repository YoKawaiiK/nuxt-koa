const Router = require('koa-router')

// passport auth
const passport = require('koa-passport')
const jwt = require('jsonwebtoken')


const auth = new Router({ prefix: '/auth' })

auth
  .get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
  )

  .get('/google/redirect', async (ctx) => {
    await passport.authenticate('google', (result) => {
      if (result.error || result.signInError) { 
        ctx.redirect('/auth/signin')
        return
      }
      else {
        ctx.redirect(`/posts/${result.user_id}`)
        // save token like accept login
        const token = jwt.sign(
          {user_id: result.user_id}, 
          process.env.JWT_KEY, {
            expiresIn: parseInt(process.env.JWT_EXPIRES_IN)
          }
        )
        ctx.cookies.set('jwt', token, {
          maxAge: parseInt(process.env.JWT_EXPIRES_IN)
        })
        ctx.cookies.set('role_id', result.role_id, {
          httpOnly: false,
          maxAge: parseInt(process.env.JWT_EXPIRES_IN)
        })
        ctx.cookies.set('user_id', result.user_id, {
          httpOnly: false,
          maxAge: parseInt(process.env.JWT_EXPIRES_IN)
        })

        return
      }
    })(ctx)
  })

module.exports = auth
