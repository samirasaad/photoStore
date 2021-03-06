import * as types from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DOWNLOAD_A_PHOTO_RECIEVE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}