import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

type UseClickNavType = [string, React.Dispatch<React.SetStateAction<string>>,(e: React.MouseEvent<HTMLButtonElement>) => void];

const useClickNav = (location: string): UseClickNavType => {

  const nav = useNavigate();
  const [selectState, setSelectState] = useState(location);

  const onClickBtn = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const loc = String(e.currentTarget.dataset.location);
    setSelectState(loc);
    nav(loc);
  }, [nav]);

  return [selectState, setSelectState, onClickBtn];
};

export default useClickNav;