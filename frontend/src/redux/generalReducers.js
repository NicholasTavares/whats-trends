import { combineReducers } from 'redux'
import GetDailyTrends from './reducers/trendsReducer'
//                  combinar todos reducers
const rootReducer = combineReducers({
    keyword: GetDailyTrends
})

export default rootReducer