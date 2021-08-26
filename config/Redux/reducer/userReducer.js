import * as constants from '../constant/constant'
import { AsyncStorage } from 'react-native'

const defaultState = {
    id: null,
    name: null,
    token: null,
    isLoggedIn: false,
}

const storageState = {}


const userInfo = AsyncStorage.getItem('USER_INFO').then((data) => {
    Object.assign(storageState, JSON.parse(data))
    return true
})

const INITIAL_STATE = userInfo ? storageState : defaultState

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case constants.SET_USER_INFO:
            return { ...action.payload }
        case constants.RESET_USER_INFO:
            return { ...defaultState }
        default:
            return state
    }
}