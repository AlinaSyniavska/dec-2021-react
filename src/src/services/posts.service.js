import {constants} from "../constants";

export const postsService = {
    getAllPosts: () => fetch(constants.apiUrl + 'posts').then(response => response.json())
}