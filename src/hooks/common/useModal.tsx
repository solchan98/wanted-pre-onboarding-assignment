import { useState } from "react";
import { IRMovie } from "../../types/apis/index.d";

type ReturnType = [boolean, IRMovie, Function, (moive: IRMovie) => void];


const useModal = (closeHandler: (moive: IRMovie) => void): ReturnType => {

  const [isShowModal, setIsShowModal] = useState(false);
  const [selectData, setSelectData] = useState({} as IRMovie);

  const openModal = (movie: IRMovie) => {
    setSelectData(movie);
    setIsShowModal(true);
  };

  const closeModal = (data: IRMovie) => {
    closeHandler(data);
    setIsShowModal(false);
  };

  return [isShowModal, selectData, openModal, closeModal];
};

export default useModal;