/* eslint-disable import/extensions */
import { AxiosError, AxiosResponse } from "axios";
import { IMoiveResponse } from "../../types/apis";
import { basicApi } from "../axios";

const API_KEY = '';

export const getMovieListByNameAndPage  = (name: string, page = 1) => {
  return basicApi.get(`?apikey=${API_KEY}&s=${name}&page=${page}`)
  .then((res: AxiosResponse): IMoiveResponse => {
    if(res.data.Response === 'False') {
      return {} as IMoiveResponse;
    }
    return res.data;
  })
  .catch((err: AxiosError) => {
    throw Error('error');
  });
};