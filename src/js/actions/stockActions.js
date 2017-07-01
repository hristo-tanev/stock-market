import axios from 'axios'

export const fetchStock = (stocks) => ({ type: 'FETCH_STOCKS', payload: { stocks } })

export const addStockRequest = () => ({ type: 'ADD_STOCK_REQUEST' })
export const addStockSuccess = (stocks) => ({ type: 'ADD_STOCK_SUCCESS', payload: { stocks } })
export const addStockFail = () => ({ type: 'ADD_STOCK_FAIL' })

export const removeStockRequest = () => ({ type: 'REMOVE_STOCK_REQUEST' })
export const removeStockSuccess = (stocks) => ({ type: 'REMOVE_STOCK_SUCCESS', payload: { stocks } })
export const removeStockFail = () => ({ type: 'REMOVE_STOCK_FAIL' })

export function fetchStocks() {
  return (dispatch) => {
    socket.emit('request stocks')
    socket.on('broadcast', (stocks) => {
      dispatch(fetchStock(stocks.data))
    })
  }
}

export function removeStock(name) {
  return (dispatch) => {
    dispatch(removeStockRequest())
    axios({
      url: '/remove_stock',
      method: 'post',
      data: {
        name
      }
    })
    .then((response) => {
      socket.emit('request stocks')
      socket.on('broadcast', (stocks) => {
        dispatch(removeStockSuccess(stocks.data))
      })
    })
    .catch((error) => {
      dispatch(removeStockFail())
    })
  }
}

export function addStock(name) {
  return (dispatch) => {
    dispatch(addStockRequest())
    axios({
      url: '/add_stock',
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
