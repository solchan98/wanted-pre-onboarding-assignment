import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = String(process.env.REACT_APP_MOVIE_API_BASE_URL);

const axiosApi = (url: string, options?: AxiosRequestConfig) => axios.create({ baseURL: url, ...options });

export const basicApi = axiosApi(BASE_URL);