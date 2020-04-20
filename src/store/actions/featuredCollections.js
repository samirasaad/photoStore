import * as types from '../types';

export const featuredCollectionsRequest = payload => ({
    type: types.FEATURED_COLLECTIONS_REQUEST,
    payload
})

export const featuredCollectionsRecieve = payload => ({
    type: types.FEATURED_COLLECTIONS_RECIEVE,
    payload
})