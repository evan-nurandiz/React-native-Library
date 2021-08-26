import * as constant from '../constant/constant'

export const getVisitData = (id, page, onSuccess) => ({
    type: constant.API,
    payload: {
        method: 'GET',
        url: `/api/mobile/visit/${id}?page=${page}`,
        postProcessSuccess: onSuccess,
    }
})