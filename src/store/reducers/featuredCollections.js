import * as types from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FEATURED_COLLECTIONS_RECIEVE:
            return action.payload;
        default:
            return state;
    }
}