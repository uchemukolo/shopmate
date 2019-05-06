import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Button from '../Button';
import "./productCard.scss";

const ProductCard = ({ product_id, name, thumbnail, price, discounted_price, classes }) => {
  console.log(thumbnail);
  return (
  <div className={classes} >
    <div className="card-box">
    <Link to={`products/${product_id}`}></Link>
      <div className="card-box__image">
        <img src={`https://backendapi.turing.com/images/products/${thumbnail}`} alt="product-thumbnail"/>
      </div>
      <div className="">
        <div className="card-box__title">{name}</div>
        <div className="card-box__price"><s>£ {price}</s></div>
        <div className="card-box__discounted_price">£ {discounted_price}</div>
        <Button name="Buy now" classes="small-btn" />
      </div>
    </div>
    </div>
  );
};

ProductCard.propTypes = {
  product_id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string
};
ProductCard.defaultProps = {
  products: '',
};
export default ProductCard;