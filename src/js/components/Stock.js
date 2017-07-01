import React from 'react'
import { connect } from 'react-redux'

import { removeStock } from '../actions/stockActions'

@connect((store) => {
  return {
    stocks: store.stocks
  }
})

export default class Stock extends React.Component {
  constructor(props) {
    super(props)
  }

  removeCurrentStock(name) {
    this.props.dispatch(removeStock(name))
  }

  render() {
    const { name } = this.props

    return (
      <div class="w3-panel w3-card">
        <h2 class="code">{name}</h2>
        <a onClick={this.removeCurrentStock.bind(this, name)}><i class="fa fa-times"></i></a>
      </div>
    )
  }
}
