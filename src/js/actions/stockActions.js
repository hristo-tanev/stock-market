import axios from 'axios'

export const addStockRequest = () => ({ type: 'ADD_STOCK_REQUEST' })
export const addStockSuccess = (stocks) => ({ type: 'ADD_STOCK_SUCCESS', payload: { stocks } })
export const addStockFail = () => ({ type: 'ADD_STOCK_FAIL' })

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
      addStockSuccess(response.data)
    })
    .catch((error) => {
      dispatch(addStockFail())
    })
  }
}
