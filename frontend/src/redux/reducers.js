import { combineReducers } from 'redux'
import { getToday } from './actions/todayActions'
//                  combinar todos reducers
const rootReducer = combineReducers({
    today: getToday
})

export default rootReducer