import { combineReducers } from 'redux'

import chart from './chartReducer'
import stocks from './stockReducer'

export default combineReducers({
  stocks,
  chart
})
