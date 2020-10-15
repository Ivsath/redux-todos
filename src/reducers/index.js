import { combineReducers } from 'redux'

import goals from './goals'
import loading from './loading'
import todos from './todos'

export default combineReducers({
  todos,
  goals,
  loading,
})
