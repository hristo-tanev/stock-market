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
  componentDidMount() {
    this.props.dispatch(fetchStocks())
  }

  addNewStock() {
    this.props.dispatch(addStock('This is a card.'))
  }

  render() {
    const Stocks = this.props.stocks.stocks.map((stock, i) => {
      return <Stock key={i + 1} name={stock.name} />
    })

    return (
      <div class="container">
        {Stocks}
        <button type="button" onClick={this.addNewStock.bind(this)}>Add stock</button>
      </div>
    )
  }
}
