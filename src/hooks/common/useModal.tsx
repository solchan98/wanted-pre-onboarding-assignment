import { useState } from "react";

// eslint-disable-next-line import/extensions
import { IRMovie } from "../../types/apis";

type ReturnType = [boolean, IRMovie, Function, Function];

const useModal = (): ReturnType => {

  const [isShowModal, setIsShowModal] = useState(true);
  const [selectData, setSelectData] = useState({} as IRMovie);

  const openModal = (movie: IRMovie) => {
    setSelectData(movie);
    setIsShowModal(true);
  };

  const closeModal = (handler: Function) => {
    handler();
    setIsShowModal(false);
  };

  return [isShowModal, selectData, openModal, closeModal];
};

export default useModal;