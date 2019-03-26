import React from "react";
import "./footer.scss";

export default () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h5 className="footer__inner__title">QUESTIONS?</h5>
          <ul className="footer__inner__list">
            <li className="footer__inner__list__item">Help</li>
            <li className="footer__inner__list__item">Track Order</li>
            <li className="footer__inner__list__item">Returns</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="footer__inner__title">WHAT'S IN STORE</h5>
          <ul className="footer__inner__list">
            <li className="footer__inner__list__item">Women</li>
            <li className="footer__inner__list__item">Men</li>
            <li className="footer__inner__list__item">Product A-Z</li>
            <li className="footer__inner__list__item">Buy Gift Vouchers</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="footer__inner__title">FOLLOW US</h5>
          <ul className="footer__inner__list">
            <li className="footer__inner__list__item">Facebook</li>
            <li className="footer__inner__list__item">Twitter</li>
            <li className="footer__inner__list__item">YouTube</li>
          </ul>
        </div>
        <div className="col-md-3 footer__inner">©2016 shopmate Ltd</div>
      </div>
    </div>
  </div>
);
