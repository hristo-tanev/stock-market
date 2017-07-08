import React from 'react'
import { connect } from 'react-redux'

@connect((store) => {
  return {
    chart: store.chart
  }
})

export default class StockChart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
      // anychart.onDocumentReady(() => {
      //   let table = anychart.data.table()
      //   let mapping = table.mapAs()
      //   let chart = anychart.stock()
      //   chart.plot(0).ohlc(mapping).name('Test')
      //   chart.title('Stock chart')
      //   chart.container('chart')
      //   chart.draw()
      // })
  }

  render() {
    const { info } = this.props
    console.log(info)
    
    return (
      <div id="chart" class="stock-chart"></div>
    )
  }
}
