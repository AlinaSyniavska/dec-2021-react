import {constants} from "../constants";

export const commentsService = {
    getAllComments: () => fetch(constants.apiUrl + 'comments').then(response => response.json())
}