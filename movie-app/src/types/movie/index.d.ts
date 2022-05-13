import { IRMovie } from "../apis/index.d";

export interface ISearchInfo {
  title: string,
  page: number,
  isLoading: boolean,
  totalResult: number, 
}

export interface IFavoriteMovie extends IRMovie {
  index: number,
}

export interface IFavoriteMovies {
  [key: string]: IFavoriteMovie,
}