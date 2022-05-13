import { useState } from "react";
import { IRMovie } from "../../types/apis/index.d";

type ReturnType = [boolean, IRMovie, Function, (moive: IRMovie) => void];

interface CloseHandler {
  addFavorites: (movie: IRMovie) => void,
  removeFavorites: (movie: IRMovie) => void,
}

const useModal = ({ addFavorites, removeFavorites }: CloseHandler): ReturnType => {

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