import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import lists from "@utils/menu";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

export const useNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [burgerActive, setBurgerActive] = useState(false);
  const { auth } = useSelector((state: RootState) => state.user);

  const navLists = lists;

  const onBurgerClick = () => {
    setBurgerActive((prev) => !prev);
  };

  const onClick = (url: string) => {
    navigate(url);
  };

  return { auth, navLists, pathname, burgerActive, onBurgerClick, onClick };
};
