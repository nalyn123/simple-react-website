import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [burgerActive, setBurgerActive] = useState(false);

  const navLists = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/products",
      label: "Products",
    },
    {
      path: "/login",
      label: "Login",
    },
  ];

  const onBurgerClick = () => {
    setBurgerActive((prev) => !prev);
  };

  const onClick = (url: string) => {
    navigate(url);
  };

  return { navLists, pathname, burgerActive, onBurgerClick, onClick };
};
