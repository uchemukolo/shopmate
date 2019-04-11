import React from "react";
import Button from '../Button';
import "./popBanner.scss";

const PopBanner = ({toggleModal}) => (
  <div className="row">
    <div className="pop-banner-container">
      <div className="col-md-4 pop-banner-container__left">
        <div className="pop-banner-container__left--wow pop-banner-container__left__item">
          <div className="pop-banner-container__left__item__wow">WOW
          <div className="pop-banner-container__left__item__check">Check < br />WHAT!</div>
        </div>
        </div>
        <div className="pop-banner-container__left__men pop-banner-container__left__item">
        <img src="../../assets/classic3-clothes-commerce-298863.jpg" className="" alt="Register" />
      </div>
      </div>
      <div className="col-md-8 pop-banner-container__right">
        <div className="pop-banner-container__right__image">
          <img src="../../assets/custom-company-couch-7077.jpg" className="" alt="Register" />
        </div>
        <div className="card-body">
          <div className="pop-banner-container__right__title">Let the Game begin</div>
          <p className="pop-banner-container__right__details">
            Registration is on - get ready for the Open
         <div className="pop-banner-container__right__button-div"><Button onclick={toggleModal} name="Register" classes="medium-btn" /></div>
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default PopBanner;