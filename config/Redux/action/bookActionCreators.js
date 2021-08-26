import * as constant from '../constant/constant'

export const GetAllBook = (page, onSuccess, onError) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `/api/mobile/book?page=${page}`,
        postProcessSuccess: onSuccess
    }
})

export const GetBookById = (id, onSuccess, onError) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `api/mobile/book/${id}`,
        postProcessSuccess: onSuccess
    }
})

export const GetDiscoverBook = (onSuccess, onError) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: 'api/mobile/discover-book',
        postProcessSuccess: onSuccess
    }
})


const setAllBook = (response) => ({
    type: constant.SET_ALL_BOOK,
    payload: response
})
