import { combineReducers } from 'redux'
import GetTrends from './reducers/trendsReducer'
//                  combina todos reducers
const rootReducer = combineReducers({
    daily: GetTrends,
    sports: GetTrends,
    business: GetTrends
})

export default rootReducer