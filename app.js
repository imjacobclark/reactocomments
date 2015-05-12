var jsonServer = require('json-server')

var server = jsonServer.create()

server.use(jsonServer.defaults)

server.use(jsonServer.router('db.json'))

server.listen(3000)