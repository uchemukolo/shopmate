import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.scss";

const NavBar = () => (
  <nav navbar="true">
  <div className="nav-container">
  <div className="nav-container__logo">
  <Link to="/">SHOPMATE</Link>
  </div>
    <div className="nav-container__menu-group">
    <span className="nav-container__menu-group__menu">
    <Link to="/men-catalogue">Women</Link>
    </span>
    <span className="nav-container__menu-group__menu">
    <Link to="/men-catalogue">Men</Link>
</span>
    <span className="nav-container__menu-group__menu">
    <Link to="/men-catalogue">Kids</Link>
    </span>
    <span className="nav-container__menu-group__menu">
    <Link to="/men-catalogue">Shoes</Link></span>
    <span className="nav-container__menu-group__menu">
    <Link to="/men-catalogue">Brands</Link></span>
    </div>
    <div className="nav-container__icon-menus">
    <input className='nav-container__icon-menus__search-icon' type='search' placeholder='search anything'/>
    </div>
  </div>
  </nav>
);

export default NavBar;