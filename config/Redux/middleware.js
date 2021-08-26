import axios from 'axios'

import * as constant from './constant/constant'
import { AsyncStorage } from 'react-native';
import { Logout } from '../Redux/action/authActionCreator'

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type !== constant.API) return next(action)

    const BASE_URL = 'https://perpustakaan-elektro.my.id';

    const getToken = async () => {
        let token
        token = await AsyncStorage.getItem('USER_INFO')
        AUTH_TOKEN = JSON.parse(token)
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN.token}`
            CallApi(token)
        } else {
            CallApi(token)
        }
    }

    getToken()

    const { url, method, success, data, postProcessSuccess, postProcessError } = action.payload;

    const CallApi = (token) => {
        axios({
            method,
            url: BASE_URL + url,
            data: data ? data : null
        }).then((response) => {
            if (success) dispatch(success(response.data.data));
            if (postProcessSuccess) postProcessSuccess(response.data.data);
        }).catch(err => {
            if (!err.response) console.warn(err)
            else {
                if (err.response.data.message) {
                    if (postProcessError) postProcessError(err.response.data.message)
                }
                if (err.response.status === 401) {
                    if (postProcessError) postProcessError(err.response.data.message)
                }
                if (token) {
                    if (err.response.status === 401) {
                        if (postProcessError) dispatch(Logout())
                    }
                }
            }
        })
    }

}