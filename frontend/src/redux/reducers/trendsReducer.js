export default function (state = {}, action) {
    switch (action.type) {
        case 'DAILY':
            return { ...state, countryDaily: action.payload.data }
        case 'SPORTS':
            return { ...state, sports: action.payload.data }
        case 'BUSINESS':
            return { ...state, business: action.payload.data }
        case 'ENTERTAINMENT':
            return { ...state, entertainment: action.payload.data }
        default:
            return state
    }
}