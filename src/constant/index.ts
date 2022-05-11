/* eslint-disable import/extensions */
import { IRMovie } from "../types/apis";
import { ISearchInfo } from "../types/movie";

export const TIME_OF_WAIE_TO_RECALL: number = 1000;

export const INIT_MOVIE_STATE: Array<IRMovie> = [];
export const INIT_SEARCH_INFO: ISearchInfo = { title: '', page: 1, isLoading: false, totalResult: 0 };