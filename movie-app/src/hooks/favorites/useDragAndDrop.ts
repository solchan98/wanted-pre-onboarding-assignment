import store from 'storejs';
import { Dispatch, DragEvent, SetStateAction, useRef } from "react";

import { IFavoriteMovie } from "../../types/movie/index.d";

type ReturnTypes = [(e: DragEvent<HTMLElement>) => void, () => void, (e: DragEvent<HTMLElement>) => void, (e: DragEvent<HTMLElement>) => void];

const useDragAndDrop = (favoritMovieList: IFavoriteMovie[], setFavoriteMovieList: Dispatch<SetStateAction<IFavoriteMovie[]>>): ReturnTypes => {

  const intersecElementIndex = useRef<number>(0);
  const clickedElementIndex = useRef<number>(0);

  const getInterSectionElementIndex = (index: number) => {
    return favoritMovieList.findIndex((movie) => movie.index  === index);
  };

  const onDragStart = (e: DragEvent<HTMLElement>) => {
    const { id } = e.currentTarget.dataset;
    clickedElementIndex.current = getInterSectionElementIndex(Number(id));
  };

  const onDragEnd = () => {
    const localMovieList = store.get(String(process.env.REACT_APP_LOCAL_FAVORITES_KEY));
    setFavoriteMovieList((prev) => {
      const newFavoriteList = [...prev];
      const item = newFavoriteList[clickedElementIndex.current];
      newFavoriteList.splice(clickedElementIndex.current, 1);
      newFavoriteList.splice(intersecElementIndex.current, 0, item);
      newFavoriteList.forEach((movie, index) => { localMovieList[movie.imdbID].index = index; });
      store.set(String(process.env.REACT_APP_LOCAL_FAVORITES_KEY), localMovieList);
      return newFavoriteList;
    });
  };

  const onDragEnter = (e: DragEvent<HTMLElement>) => {
    const { id } = e.currentTarget.dataset;
    intersecElementIndex.current = getInterSectionElementIndex(Number(id));
  };

  const onDragOver = (e: DragEvent<HTMLElement>) => e.preventDefault();

  return [onDragStart, onDragEnd, onDragEnter, onDragOver];
};

export default useDragAndDrop;