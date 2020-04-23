import * as types from "../types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.PHOTOGRAPHER_PROFILE_RECIEVE:
            return action.payload;
        default:
            return state;
    }
}