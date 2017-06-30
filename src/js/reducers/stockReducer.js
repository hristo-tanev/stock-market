const initialState = {
  stocks: [],
  busy: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
  }

  return state
}
