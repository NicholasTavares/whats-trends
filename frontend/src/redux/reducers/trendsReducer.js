export default function (state = {}, action) {
    switch (action.type) {
        case 'KEYWORD':
            return { ...state, countryDaily: action.payload.data }
        default:
            return state
    }
}