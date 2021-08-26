import * as constants from '../constant/constant'

export default function bookReducers(state = [], action) {
    switch (action.type) {
        case constants.SET_ALL_BOOK:
            return action.payload
        default:
            return state
    }
}