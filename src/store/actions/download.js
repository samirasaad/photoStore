import * as types from '../types';

export const downloadApPhotoRequest = payload => ({
    type: types.DOWNLOAD_A_PHOTO_REQUEST,
    payload
})

export const downloadApPhotoRecieve = payload => ({
    type: types.DOWNLOAD_A_PHOTO_RECIEVE,
    payload
})