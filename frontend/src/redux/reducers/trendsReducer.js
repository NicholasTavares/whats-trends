export default function (state = {}, action) {
    switch (action.type) {
        case 'KEYWORD':
            return { ...state, interestSearch: action.payload.data }
        default:
            return state
    }
}