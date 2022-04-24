import {LOAD_POSTS, LOAD_USERS} from "./action.types";

const loadUsersData = (payload) => {
    return {type: LOAD_USERS, payload}
}

const loadPostsData = (payload) => {
    return {type: LOAD_POSTS, payload}
}

export {loadUsersData, loadPostsData}