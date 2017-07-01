import http from 'http'
import express from 'express'
import webpack from 'webpack'
import mongoose from 'mongoose'
import socketio from 'socket.io'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import socket from './socket'
import handleRoutes from './routes'
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

handleRoutes(app)

socket(io)

server.listen(3000)
