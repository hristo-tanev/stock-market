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
    return (
      <div class="container">
        <button type="button" onClick={this.addNewStock.bind(this)}>Add stock</button>
      </div>
    )
  }
}
