import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useClickNav = () => {

  const nav = useNavigate();

  return useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const location = String(e.currentTarget.dataset.location);
    nav(location);
  }, [nav]);
};

export default useClickNav;