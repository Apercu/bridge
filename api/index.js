import express from 'express'
import bodyParser from 'body-parser'

import * as ressources from './ressources'

const server = express()

server.use(bodyParser.json())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next()
})

server.use('/weather', ressources.weather)
server.use('/bitcoin', ressources.bitcoin)
server.use('/stack', ressources.stack)
server.use('/github', ressources.github)

const port = process.env.PORT || 3001

server.listen(port, 'localhost', err => {
  if (err) { return console.log(err) }
  console.log(`listening at http://localhost:${port}`)
})
