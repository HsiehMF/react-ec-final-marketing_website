const fs = require('fs')
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'foodstore.json'))
const middleWares = jsonServer.defaults()
server.use(jsonServer.bodyParser)
server.use(middleWares)

require('dotenv').config()

server.get('')

server.use(router)
server.listen(3001, (res, req) => {
  console.log('JSON Server is running')
})