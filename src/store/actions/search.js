import * as types from '../types';

export const searchRequest = payload => ({
    type: types.SEARCH_PHOTOS_REQUEST,
    payload
})

export const searchRecieve = payload => ({
    type: types.SEARCH_PHOTOS_RECIEVE,
    payload
})