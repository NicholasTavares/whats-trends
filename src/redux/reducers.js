import { combineReducers } from 'redux'

//                  combinar todos reducers
const rootReducer = combineReducers({
    today: () => ({ summary: { credito: 100, debt: 50 } })
})

export default rootReducer