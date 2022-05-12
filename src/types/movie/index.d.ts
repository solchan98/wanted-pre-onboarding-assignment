import { IRMovie } from "../apis/index.d";

export interface ISearchInfo {
  title: string,
  page: number,
  isLoading: boolean,
  totalResult: number, 
}

export interface IFavoriteMovies {
  [key: string]: IRMovie,
}