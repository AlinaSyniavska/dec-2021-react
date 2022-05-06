

import {ICar} from "../interfaces";
import {axiosService, Response} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: (): Response<ICar[]> => axiosService.get(urls.cars),
    getById: (id: string): Response<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create: (car: ICar) : Response<ICar> => axiosService.post(urls.cars, car),
    update: (id: string, car: ICar): Response<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    delete: (id: string): Response<void> => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}