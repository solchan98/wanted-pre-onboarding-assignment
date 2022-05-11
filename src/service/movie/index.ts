import { AxiosError, AxiosResponse } from "axios";

import { basicApi } from "../axios";
/* eslint-disable import/extensions */
import { IRMovie } from "../../types/apis";

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