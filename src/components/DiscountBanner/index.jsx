import React from "react";
import SubscribeInput from '../SubscribeInput';
import Button from '../Button';

import "./discount.scss";

const DiscountBanner = () => (
      <div className="discount">
        <div className="discount__text-wrapper">
          <h1 className="card-title">10% Discount for your subscription</h1>
          <p className="card-text discount__details">Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior.</p>
          <div className="discount__subscribe-grp ">
            <SubscribeInput />
          <Button name="Subscribe" classes="small-btn" />
          </div>
        </div>
      </div>
);
export default DiscountBanner;