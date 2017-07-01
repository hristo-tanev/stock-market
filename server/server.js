import http from 'http'
import express from 'express'
import webpack from 'webpack'
import mongoose from 'mongoose'
import socketio from 'socket.io'
import bodyParser from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import Stock from '../models/Stock'
import config from '../webpack.config'

mongoose.connect('mongodb://localhost/stocks')
const db = mongoose.connection
db.once('open', () => {
  console.log('Connection to "stocks" is now open...')
})

const app = new express()
const server = http.createServer(app)
const io = socketio(server)
const compiler = webpack(config)

app.use(express.static('src'))
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.post('/stock', (request, response) => {
  const { name } = request.body
  const stock = new Stock({ name })
  stock.save()
  response.send({ status: 200 })
})

io.on('connection', (socket) => {
  console.log('user connected...')
  socket.on('request stocks', () => {
    Stock.find({}, (error, stocks) => {
      if (error) {
        throw error
      }

      io.sockets.emit('broadcast', { data: stocks })
    })
  })

  socket.on('disconnect', () => {
    console.log('user disconnected...')
  })
})

server.listen(3000)
