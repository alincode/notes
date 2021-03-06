const appCore = require('app-core')
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = appCore.hello()
})

app.listen(3000)
