import { AxiosError, AxiosResponse } from "axios";

import { basicApi } from "../axios";
/* eslint-disable import/extensions */
import { IMoiveResponse } from "../../types/apis";

const API_KEY = '';

export const getMovieListByNameAndPage = (name: string, page = 1) => {
  return basicApi.get(`?apikey=${API_KEY}&s=${name}&page=${page}`)
  .then((res: AxiosResponse): IMoiveResponse => {
    if(res.data.Response === 'False') {
      return { Search: [], totalResults: '0', Response: 'False' };
    }
    return res.data;
  })
  .catch((err: AxiosError) => {
    throw Error(err.message);
  });
};