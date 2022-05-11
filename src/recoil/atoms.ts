/* eslint-disable import/extensions */
import { atom } from "recoil";
import { IRMovie } from "../types/apis";
import { ISearchInfo } from "../types/movie";

export const INIT_MOVIE_STATE: Array<IRMovie> = [];
const INIT_SEARCH_INFO: ISearchInfo = { title: '', page: 1 };

export const movieListState = atom({
  key: 'movieListState',
  default: INIT_MOVIE_STATE,
});

export const searchInfoState = atom({
  key: 'searchInfo',
  default: INIT_SEARCH_INFO,
});