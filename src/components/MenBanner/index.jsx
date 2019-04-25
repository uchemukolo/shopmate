import React from "react";
import "./menBanner.scss";

const MenBanner = () => (
  <div className="row">
    <div className="men-banner">
    <div className="men-banner__title">Mens Wear</div>
<div className="men-banner__links">
      <div className="col-md-3">
        <ul className="">
          <li className="men-banner__links__item">Accessories</li>
          <li className="men-banner__links__item">Tops</li>
          <li className="men-banner__links__item">Trousers</li>
          <li className="men-banner__links__item">T-shirts</li>
          <li className="men-banner__links__item">Bags</li>
          <li className="men-banner__links__item">Caps</li>
        </ul>
        </div>
        <div className="col-md-3">
        <ul className="">
          <li className="men-banner__links__item">Hats</li>
          <li className="men-banner__links__item">Sweatshirts</li>
          <li className="men-banner__links__item">Hoodies</li>
          <li className="men-banner__links__item">Jeans</li>
          <li className="men-banner__links__item">Joggers</li>
          <li className="men-banner__links__item">Jackets</li>
        </ul>
        </div>
        <div className="col-md-3">
        <ul className="">
        <li className="men-banner__links__item">Jewellery</li>
          <li className="men-banner__links__item">Polo Shirts</li>
          <li className="men-banner__links__item">Loungewear</li>
          <li className="men-banner__links__item">Coats</li>
          <li className="men-banner__links__item">Shoes</li>
          </ul>
      </div>
      <div className="col-md-3"></div>
      </div>
    </div>
  </div>
);

export default MenBanner;
