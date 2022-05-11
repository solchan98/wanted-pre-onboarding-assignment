import { atom } from "recoil";

/* eslint-disable import/extensions */
import { ISearchInfo } from "../types/movie";
import { IRMovie } from "../types/apis";

const INIT_MOVIE_STATE: Array<IRMovie> = [];
const INIT_SEARCH_INFO: ISearchInfo = { title: '', page: 1, isLoading: false };

export const movieListState = atom({
  key: 'movieListState',
  default: INIT_MOVIE_STATE,
});

export const searchInfoState = atom({
  key: 'searchInfo',
  default: INIT_SEARCH_INFO,
});