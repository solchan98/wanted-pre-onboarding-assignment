/* eslint-disable import/extensions */
import { AxiosError, AxiosResponse } from "axios";
import { IRMovie } from "../../types/apis";
import { basicApi } from "../axios";

const API_KEY = '92e32667';

export const getMovieListByNameAndPage = (name: string, page = 1) => {
  return basicApi.get(`?apikey=${API_KEY}&s=${name}&page=${page}`)
  .then((res: AxiosResponse): IRMovie[] => {
    if(res.data.Response === 'False') {
      return [];
    }
    return res.data.Search;
  })
  .catch((err: AxiosError) => {
    throw Error(err.message);
  });
};