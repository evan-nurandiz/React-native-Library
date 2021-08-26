import * as constants from '../constant/constant'

export default function borrowReducer(state = [], action) {
    switch (action.type) {
        case constants.GET_USER_BORROW:
            const borrow = state ? action.payload :
                [...state, action.payload]
            return borrow
        default:
            return state
    }
}