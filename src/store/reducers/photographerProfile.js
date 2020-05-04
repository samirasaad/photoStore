import * as types from "../types";

const INITIAL_STATE = {
    photos:[],
    likes:[],
    collections:[]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.PHOTOGRAPHER_PROFILE_RECIEVE:
            return {...state,
                photos:action.payload
            };
            case types.PHOTOGRAPHER_LIKES_RECIEVE:
            return {...state,
                likes:action.payload
            };
            case types.PHOTOGRAPHER_COLLECTIONS_RECIEVE:
            return {...state,
                collections:action.payload
            }
        default:
            return state;
    }
}