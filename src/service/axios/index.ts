import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = `http://www.omdbapi.com`;
/** const API: string = process.env.REACT_APP_API_KEY  */

const axiosApi = (url: string, options?: AxiosRequestConfig) => axios.create({ baseURL: url, ...options });

export const basicApi = axiosApi(BASE_URL);