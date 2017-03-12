import { combineReducers } from 'redux'
import todos from './todos'
// 生成rootReducer
const rootReducer = combineReducers({
  todos
})

export default rootReducer
