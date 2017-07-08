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

  componentDidUpdate() {
    const { info } = this.props
    let entries = []
    if (info.length > 0) {
      anychart.onDocumentReady(() => {
        let table = anychart.data.table()
        info.map((entry) => {
          entries.push([entry[0], entry[1].toString(), entry[2].toString(), entry[3].toString(), entry[4].toString()])
        })

        table.addData(entries)

        let mapping = table.mapAs()
        mapping.addField('open', 1, 'first')
        mapping.addField('high', 2, 'max')
        mapping.addField('low', 3, 'min')
        mapping.addField('close', 4, 'last')

        let chart = anychart.stock()
        chart.plot(0).ohlc(mapping).name('Test')
        chart.title('Stock')
        chart.container('chart')
        chart.draw()
      })
    }
  }

  // componentWillMount() {
  //     anychart.onDocumentReady(() => {
  //       let table = anychart.data.table()
  //       let mapping = table.mapAs()
  //       let chart = anychart.stock()
  //       chart.plot(0).ohlc(mapping).name('Test')
  //       chart.title('Stock chart')
  //       chart.container('chart')
  //       chart.draw()
  //     })
  // }

  render() {
    return (
      <div id="chart" class="stock-chart"></div>
    )
  }
}
