import axios from "axios";
import baseURL from "../constants/url";

const axiosService = axios.create({baseURL});

export {axiosService}