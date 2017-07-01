import axios from 'axios'

export const fetchStock = (stocks) => ({ type: 'FETCH_STOCKS', payload: { stocks } })

export const addStockRequest = () => ({ type: 'ADD_STOCK_REQUEST' })
export const addStockSuccess = (stocks) => ({ type: 'ADD_STOCK_SUCCESS', payload: { stocks } })
export const addStockFail = () => ({ type: 'ADD_STOCK_FAIL' })

export function fetchStocks() {
  return (dispatch) => {
    socket.emit('request stocks')
    socket.on('broadcast', (stocks) => {
      dispatch(fetchStock(stocks.data))
    })
  }
}

export function addStock(name) {
  return (dispatch) => {
    dispatch(addStockRequest())
    axios({
      url: '/stock',
      method: 'post',
      data: {
        name
      }
    })
    .then((response) => {
      socket.emit('request stocks')
      socket.on('broadcast', (stocks) => {
        dispatch(addStockSuccess(stocks.data))
      })
    })
    .catch((error) => {
      dispatch(addStockFail())
    })
  }
}
