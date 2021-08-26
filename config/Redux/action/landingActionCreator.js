import * as constant from '../constant/constant'

export const getLastBorrow = (id, onSuccess) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `/api/mobile/last-borrow/${id}`,
        postProcessSuccess: onSuccess,
    }
})

export const getProfileData = (id, onSuccess) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `/api/mobile/student-information/${id}`,
        postProcessSuccess: onSuccess,
    }
})

export const getLastBorrowDate = (id, onSuccess) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `/api/mobile/last-borrow/date/${id}`,
        postProcessSuccess: onSuccess,
    }
})