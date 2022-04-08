import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    // https://jsonplaceholder.typicode.com/posts?userId=6
    getPostsByUser: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}

export {postsService}