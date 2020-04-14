import * as types from "../types/search";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SEARCH_PHOTOS_RECIEVE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}