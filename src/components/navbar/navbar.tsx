import { useNavbar } from "./navbar-model";
import "./navbar.scss";
import { Logo } from "@assets/images";

const Navbar = () => {
  const { navLists, pathname, burgerActive, onBurgerClick, onClick } =
    useNavbar();

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <img className="navbar__logo" src={Logo} alt="" />

        <button
          className={`navbar__btn ${burgerActive ? "navbar__btn__active" : ""}`}
          onClick={onBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`navbar__menu ${burgerActive ? "navbar__menu__active" : ""}`}
      >
        <ul>
          {navLists.map((value, index) => (
            <li
              key={index}
              className={`${pathname === value?.path ? "active" : ""}`}
            >
              <button type="button" onClick={() => onClick(value?.path)}>
                {value?.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
