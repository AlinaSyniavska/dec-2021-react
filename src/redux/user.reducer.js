import {LOAD_USERS} from "./action.types";

export function reducerUser(state = [], action) {
    switch (action.type) {
        case LOAD_USERS:
            return [...action.payload];

        default:
            return state;
    }
}