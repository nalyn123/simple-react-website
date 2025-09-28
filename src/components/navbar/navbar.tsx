import { CommonUtils } from "@utils/common-utils";
import { useNavbar } from "./navbar-model";
import styles from "./navbar.module.scss";
import { Logo } from "@assets/images";
import React from "react";

const Navbar = () => {
  const { auth, navLists, pathname, burgerActive, onBurgerClick, onClick } =
    useNavbar();

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar__header"]}>
        <img className={styles["navbar__logo"]} src={Logo} alt="" />

        <button
          className={`${styles["navbar__btn"]} ${
            burgerActive ? styles["navbar__btn__active"] : ""
          }`}
          onClick={onBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`${styles["navbar__menu"]} ${
          burgerActive ? styles["navbar__menu__active"] : ""
        }`}
      >
        <ul>
          {navLists.map((value, index) =>
            CommonUtils.checkAuth(value?.auth) ? (
              <React.Fragment key={index} />
            ) : (
              <li
                key={index}
                className={`${
                  pathname === value?.path ? styles["active"] : ""
                }`}
              >
                <button type="button" onClick={() => onClick(value?.path)}>
                  {value?.label}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
