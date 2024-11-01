/*
 * @Author: 卫鹏飞
 * @Date: 2024-10-08 18:24:12
 * @LastEditTime: 2024-10-12 18:36:49
 * @LastEditors: 卫鹏飞
 * @FilePath: /new-official-website/server.js
 * @Description:
 */
const express = require("express")
const next = require("next")
const helmet = require("helmet")

const port = parseInt(process.env.PORT || process.env.APP_PORT || 3350, 10)
const dev = process.env.NODE_ENV === "development"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // 禁用 X-Powered-By 请求头
  server.disable("x-powered-by")
  server.use(helmet.noSniff())
  server.use(express.json())

  server.all("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
