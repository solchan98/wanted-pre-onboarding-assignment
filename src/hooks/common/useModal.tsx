import { MouseEventHandler, useState } from "react";

// eslint-disable-next-line import/extensions
import { IRMovie } from "../../types/apis";

type ReturnType = [boolean, IRMovie, Function, MouseEventHandler<HTMLButtonElement>];


const useModal = (closeHandler: Function): ReturnType => {

  const [isShowModal, setIsShowModal] = useState(false);
  const [selectData, setSelectData] = useState({} as IRMovie);

  const openModal = (movie: IRMovie) => {
    setSelectData(movie);
    setIsShowModal(true);
  };

  const closeModal = () => {
    closeHandler();
    setIsShowModal(false);
  };

  return [isShowModal, selectData, openModal, closeModal];
};

export default useModal;