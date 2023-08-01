import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open"
  }

  function closeMenu () {
    document.body.classList.remove("menu--open")
  }
  return (
    <div className="main__body">
      <div className="nav__container">
        <div className="logo__div">
            <li className="nav__logo"><a href="">Movify</a></li>
        </div>
        <div className="nav__links">
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="/movie">Movies & Tv shows</Link>
        </li>
     
        </div>
        <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu__links">
                <li className="menu__list">
                    <Link to="/" className="menu__link">Home</Link>
                </li>
                <li className="menu__list">
                    <Link to="/movie" className="menu__link">Movies & Tv shows</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
