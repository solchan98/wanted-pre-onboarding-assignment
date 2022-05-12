import { MouseEventHandler, useState } from "react";

type ReturnType = [boolean, MouseEventHandler<Element>, Function];

const useModal = (): ReturnType => {

  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = (handler: Function) => {
    handler();
    setIsShowModal(false);
  };

  return [isShowModal, openModal, closeModal];
};

export default useModal;