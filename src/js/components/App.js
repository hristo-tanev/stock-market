import React from 'react'
import { connect } from 'react-redux'

import Stock from './Stock'
import { addStock, fetchStocks } from '../actions/stockActions'

@connect((store) => {
  return {
    stocks: store.stocks
  }
})

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stockName: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchStocks())
  }

  getStockName(e) {
    this.setState({
      stockName: e.target.value
    })
  }

  addNewStock() {
    const { stockName } = this.state
    this.props.dispatch(addStock(stockName))
    this.setState({
      stockName: ''
    })
  }

  render() {
    const { stockName } = this.state
    const Stocks = this.props.stocks.stocks.map((stock, i) => {
      return <li key={i + 1}><Stock name={stock.name} /></li>
    })

    return (
      <div class="container">
        <ul class="stocks">
          {Stocks}
          <li>
            <div class="w3-panel w3-card input-stock">
              <input class="w3-input" type="text" value={stockName} onChange={this.getStockName.bind(this)} placeholder="Stock code"/>
              <br />
              <button class="btn btn-primary" type="button" onClick={this.addNewStock.bind(this)}>Add stock</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
