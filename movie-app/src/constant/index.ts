import { IRMovie } from "../types/apis/index.d";
import { ISearchInfo } from "../types/movie/index.d";

export const TIME_OF_WAIE_TO_RECALL: number = 200;

export const INIT_MOVIE_STATE: Array<IRMovie> = [];
export const INIT_SEARCH_INFO: ISearchInfo = { title: '', page: 1, isLoading: false, totalResult: 0 };

export const NON_IMAGE: string = 'N/A';
export const REPLACE_IMG_URL = 'https://img.cgv.co.kr/GiftStore/Product/Pc/List/15463252009160.jpg';