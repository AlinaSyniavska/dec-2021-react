import {constants} from "../constants";

export const usersService = {
    getAllUsers: () => fetch(constants.apiUrl + 'users').then(resolve => resolve.json())
}