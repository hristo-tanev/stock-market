import mongoose from 'mongoose'

const Schema = mongoose.Schema

const stockSchema = new Schema({
  name: String
})

const Stock = mongoose.model('Stock', stockSchema)

export default Stock
