import { atom } from "recoil";

/* eslint-disable import/extensions */
import { IRMovie } from "../types/apis";
import { ISearchInfo } from "../types/movie";

const INIT_MOVIE_STATE: Array<IRMovie> = [];
const INIT_SEARCH_INFO: ISearchInfo = { title: '', page: 1, isLoading: false, isLast: false };

export const movieListState = atom({
  key: 'movieListState',
  default: INIT_MOVIE_STATE,
});

export const searchInfoState = atom({
  key: 'searchInfo',
  default: INIT_SEARCH_INFO,
});