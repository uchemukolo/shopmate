import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ModalContext } from "../../App";
import "./topNav.scss";

const TopNav = () => {

  const { toggleModal } = useContext(ModalContext);

  return (
    <nav navbar="true">
    <div className="top-nav-container">
    <div className="top-nav-container__top">Hi!
    <span className="top-nav-container__salut" onClick={() => toggleModal('Login')}>Sign In</span>
    <span>or</span>
    <span className="top-nav-container__salut" onClick={() => toggleModal('Signup')}>Register</span>
    </div>
      <div className="top-nav-container__menu-group">
      <span className="top-nav-container__menu-group__menu">
      <Link to="/men-catalogue">Daily Deals</Link>
      </span>
      <span className="top-nav-container__menu-group__menu">
      <Link to="/men-catalogue">Sell</Link>
  </span>
      <span className="top-nav-container__menu-group__menu">
      <Link to="/men-catalogue">Help & Contact</Link>
      </span>
      </div>
      <div className="top-nav-container__icon-menus">
      <span className="top-nav-container__icon-menus__flag"></span>
      <span className="top-nav-container__icon-menus__flag-gbr">£ GBR</span>
      <span className="fas fa-lock top-nav-container__icon-menus__notify-icon"></span>
      <span className="top-nav-container__icon-menus__notification-count">6</span>
      <span className="top-nav-container__icon-menus__bag-total">Your bag: £20.99</span>

      </div>
    </div>
    </nav>
  );
}
export default TopNav;