export default function (state = {}, action) {
    switch (action.type) {
        case 'DAILY':
            return { ...state, countryDaily: action.payload.data }
        case 'REALTIME':
            return { ...state, realTime: action.payload.data }
        default:
            return state
    }
}