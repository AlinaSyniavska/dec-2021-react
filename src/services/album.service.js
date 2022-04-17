import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const albumService = {
    getAll: () => axiosService.get(urls.albums),
    getById: (id) => axiosService.get(`${urls.albums}/${id}`),
    getPhotosById: (id) => axiosService.get(`${urls.albums}/${id}/photos`)
}

export {
    albumService
}