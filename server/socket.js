import Stock from '../models/Stock'

const socket = (io) => {
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
}

export default socket
