import * as types from '../types';

//PHOTOS
export const photographerProfileRequest = payload => ({
    type: types.PHOTOGRAPHER_PROFILE_REQUEST,
    payload
})

export const photographerProfileRecieve = payload => ({
    type: types.PHOTOGRAPHER_PROFILE_RECIEVE,
    payload
})

//LIKES
export const photographerLikesRequest = payload => ({
    type: types.PHOTOGRAPHER_LIKES_REQUEST,
    payload
})

export const photographerLikesRecieve = payload => ({
    type: types.PHOTOGRAPHER_LIKES_RECIEVE,
    payload
})

//COLLECTIONS
export const photographerCollectionsRequest = payload => ({
    type: types.PHOTOGRAPHER_COLLECTIONS_REQUEST,
    payload
})

export const photographerCollectionsRecieve = payload => ({
    type: types.PHOTOGRAPHER_COLLECTIONS_RECIEVE,
    payload
})