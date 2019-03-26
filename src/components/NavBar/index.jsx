import React from "react";
import "./navbar.scss";

const NavBar = () => (
  <nav navbar navbar-light>
  <div className="nav-container">
  <div className="nav-container__logo">SHOPMATE</div>
    <div className="nav-container__menu-group">
    <span className="nav-container__menu-group__menu">Women</span>
    <span className="nav-container__menu-group__menu">Men</span>
    <span className="nav-container__menu-group__menu">Kids</span>
    <span className="nav-container__menu-group__menu">Shoes</span>
    <span className="nav-container__menu-group__menu">Brands</span>
    </div>
    <div className="nav-container__icon-menus">
    <i className="fas fa-search nav-container__icon-menus__search-icon"></i>
    <i className="fas fa-lock nav-container__icon-menus__notify-icon"></i>
    <span className="nav-container__icon-menus__notification-count">6</span>
    </div>
  </div>
  </nav>
);

export default NavBar;