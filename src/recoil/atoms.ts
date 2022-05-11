/* eslint-disable import/extensions */
import { atom } from "recoil";
import { IRMovie } from "../types/apis";

const INIT: Array<IRMovie> = [];

export const movieListState = atom({
  key: 'movieListState',
  default: INIT,
});