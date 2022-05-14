import { atom } from "recoil";
import { INIT_MOVIE_STATE, INIT_SEARCH_INFO } from "../constant";
import { IFavoriteMovie } from "../types/movie/index.d";

export const movieListState = atom({
  key: 'movieListState',
  default: INIT_MOVIE_STATE,
});

export const searchInfoState = atom({
  key: 'searchInfo',
  default: INIT_SEARCH_INFO,
});

export const favoriteListState = atom({
  key: 'favoriteListState',
  default: [] as IFavoriteMovie[],
});