import React from 'react'

export default class StockChart extends React.Component {
  componentWillMount() {
      anychart.onDocumentReady(() => {
        let table = anychart.data.table()
        let mapping = table.mapAs()
        let chart = anychart.stock()
        chart.plot(0).ohlc(mapping).name('Test')
        chart.title('Stock chart')
        chart.container('chart')
        chart.draw()
      })
  }

  render() {
    return (
      <div id="chart" class="stock-chart"></div>
    )
  }
}
