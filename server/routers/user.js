const Router = require('koa-router')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  // 登陆成功
  if (user.username === 'shaury' && user.password === 'shaury.123') {
    ctx.session.user = {
      username: 'shaury'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'shaury'
      }
    }
  } else { // 登陆失败
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
