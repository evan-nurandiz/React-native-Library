import * as constant from '../constant/constant'
import { AsyncStorage } from 'react-native';

export const loginUser = (data, onSuccess, onError) => ({
    type: constant.API,
    payload: {
        method: 'POST',
        url: '/api/mobile/auth',
        data,
        success: (response) => (setUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

export const Logout = () => {
    AsyncStorage.removeItem('USER_INFO')
    return { type: constant.RESET_USER_INFO }
}

export const Profile = (id, onSuccess) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `/api/mobile/profile/${id}`,
        postProcessSuccess: onSuccess,
    }
})

export const ValidateToken = (onError) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: '/api/user',
        postProcessError: onError
    }
})

const setUserInfo = (response) => {
    const userInfo = {
        student_id: response.student_id,
        token: response.token,
        isLoggedIn: true
    }
    const token = {
        token: response.token
    }
    AsyncStorage.setItem('USER_INFO', JSON.stringify(userInfo))
    return { type: constant.SET_USER_INFO, payload: userInfo }
}