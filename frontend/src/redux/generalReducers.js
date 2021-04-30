import { combineReducers } from 'redux'
import GetInterestKeyword from './reducers/trendsReducer'
//                  combinar todos reducers
const rootReducer = combineReducers({
    keyword: GetInterestKeyword
})

export default rootReducer