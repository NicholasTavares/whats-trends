import { combineReducers } from 'redux'
import GetTrends from './reducers/trendsReducer'
//                  combina todos reducers
const rootReducer = combineReducers({
    daily: GetTrends,
    realTime: GetTrends
})

export default rootReducer