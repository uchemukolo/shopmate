import React from "react";
import Button from '../Button';
import "./card.scss";

const Card = ({ name, image, price, classes }) => {
  return (
  <div className={classes} >
    <div className="card-box">
      <div className="card-box__image" src="img_avatar1.png"/>
      {image}
      <div className="">
        <div className="card-box__title">{name}</div>
        <div className="card-box__price">£ {price}</div>
        <Button name="Buy now" classes="small-btn" />
      </div>
    </div>
    </div>
  );
};

export default Card;