import * as constant from '../constant/constant'

export const GetBorrowList = (id, page, onSuccess, onError) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `/api/mobile/borrow/${id}?page=${page}`,
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

export const GetBorrowById = (id, onSuccess) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `/api/mobile/borrow/book/${id}`,
        postProcessSuccess: onSuccess,
    }
})

export const SearchBook = (onSuccess) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `api/mobile/book/search/dodo`,
        postProcessSuccess: onSuccess
    }
})