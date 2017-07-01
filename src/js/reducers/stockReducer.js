const initialState = {
  stocks: [],
  busy: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case 'FETCH_STOCKS': {
        const { stocks } = action.payload
        return Object.assign({}, state, { stocks })
      }
      case 'ADD_STOCK_REQUEST': {
        return Object.assign({}, state, { busy: true })
      }
      case 'ADD_STOCK_SUCCESS': {
        const { stocks } = action.payload
        return Object.assign({}, state, { stocks, busy: false })
      }
      case 'ADD_STOCK_FAIL': {
        return initialState
      }
      case 'REMOVE_STOCK_REQUEST': {
        return Object.assign({}, state, { busy: true })
      }
      case 'REMOVE_STOCK_SUCCESS': {
        const { stocks } = action.payload
        return Object.assign({}, state, { stocks, busy: false })
      }
      case 'REMOVE_STOCK_FAIL': {
        return initialState
      }
  }

  return state
}
