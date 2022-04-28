import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    deleteDyId: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar)
}

export {
    carService
}