import * as types from '../types';

export const photographerProfileRequest = payload => ({
    type: types.PHOTOGRAPHER_PROFILE_REQUEST,
    payload
})

export const photographerProfileRecieve = payload => ({
    type: types.PHOTOGRAPHER_PROFILE_RECIEVE,
    payload
})