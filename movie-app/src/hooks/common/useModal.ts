import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { IRMovie } from "../../types/apis/index.d";
import useFavoriteHandle from "./useFavoriteHandle";
import { favoriteListState, movieListState } from "../../recoil/atoms";

type ReturnType = [boolean, IRMovie, Function, (moive: IRMovie) => void];

const useModal = (): ReturnType => {

  const setMovieList = useSetRecoilState(movieListState);;
  const setFavoriteList = useSetRecoilState(favoriteListState);

  const { addFavorites, removeFavorites } = useFavoriteHandle({ setMovieList, setFavoriteList});

  const [isShowModal, setIsShowModal] = useState(false);
  const [selectData, setSelectData] = useState({} as IRMovie);

  const openModal = (movie: IRMovie) => {
    setSelectData(movie);
    setIsShowModal(true);
  };

  const closeModal = (data?: IRMovie) => {
    if(data === undefined) {
      setIsShowModal(false);
    } else if(selectData.isFavorite) {
      removeFavorites(data);
    } else {
      addFavorites(data);
    }
    setIsShowModal(false);
  };

  return [isShowModal, selectData, openModal, closeModal];
};

export default useModal;