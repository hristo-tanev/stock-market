import React from 'react'
import { connect } from 'react-redux'

import Stock from './Stock'
import { addStock } from '../actions/stockActions'

@connect((store) => {
  return {
    stocks: store.stocks
  }
})

export default class App extends React.Component {
  addNewStock() {
    this.props.dispatch(addStock('This is a card.'))
  }

  render() {
    const Stocks = this.props.stocks.stocks.map((stock, i) => {
      return <div key={i + 1}>{stock.name}</div>
    })
    return (
      <div class="container">
        {Stocks}
        <button type="button" onClick={this.addNewStock.bind(this)}>Add stock</button>
      </div>
    )
  }
}
