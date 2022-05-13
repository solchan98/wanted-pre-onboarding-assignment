/* eslint-disable import/extensions */
import { IRMovie } from "../types/apis";
import { ISearchInfo } from "../types/movie";

export const TIME_OF_WAIE_TO_RECALL: number = 1000; // TODO change to 300

export const INIT_MOVIE_STATE: Array<IRMovie> = [];
export const INIT_SEARCH_INFO: ISearchInfo = { title: '', page: 1, isLoading: false, totalResult: 0 };

export const NON_IMAGE: string = 'N/A';
export const REPLACE_IMG_URL = 'https://img.cgv.co.kr/GiftStore/Product/Pc/List/15463252009160.jpg';