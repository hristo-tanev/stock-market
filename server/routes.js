import bodyParser from 'body-parser'

import Stock from '../models/Stock'

const handleRoutes = (app) => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())

  app.post('/add_stock', (request, response) => {
    const { name } = request.body
    const stock = new Stock({ name })
    stock.save()

    response.send({ status: 200 })
  })

  app.post('/remove_stock', (request, response) => {
    const { name } = request.body
    Stock.findOne({ name }, (error, stock) => {
      if (error) {
        throw error
      }

      stock.remove((error) => {})
    })

    response.send({ status: 200 })
  })
}

export default handleRoutes
