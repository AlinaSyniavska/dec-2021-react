import {AxiosResponse} from "axios";

import {IUser} from "../interfaces";
import {urls} from "../constants";
import {axiosService} from "./axios.service";

type Response<T> = Promise<AxiosResponse<T>>;

const userService = {
    getAll: ():Response<IUser[]> => axiosService.get(urls.users),
}

export {
    userService,
}