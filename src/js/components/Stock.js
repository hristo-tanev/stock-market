import React from 'react'

export default class Stock extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name } = this.props

    return (
      <div class="w3-panel w3-card">
        <p>{name}</p>
      </div>
    )
  }
}
