export default function (state = {}, action) {
    switch (action.type) {
        case 'KEYWORD':
            return { ...state, keyword: action.payload.data }
        default:
            return state
    }
}