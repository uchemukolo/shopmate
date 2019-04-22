import React from "react";
import "./saleBanner.scss";
import Button from '../Button';

const SaleBanner = ({toggleModal}) => (
  <div className="row">
    <div className="card mb-3 sale">
      <div className="row no-gutters sale__label-wrapper">
      <div className="col-md-1">
      <div className="sale__label-wrapper__label">SALE</div>
      </div>
        <div className="col-md-3">
        <div className="sale__sale-img">
        <img src="../../assets/fashion-fashionable-footwear-267301.jpg" className="sale__sale-img" alt="Sale Item" />
</div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title sale__title">Vera Bradley</h5>
            <p className="card-text sale__text">
            Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enough perfectly placed pockets to keep smaller items organized and easy to find.
            </p>
            <p className="card-text">
              <Button onclick={toggleModal} name="Shop Now" classes="medium-btn" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SaleBanner;
