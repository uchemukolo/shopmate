import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import MenBanner from "../../components/MenBanner";
import ProductCard from "../../components/ProductCard";
// import { products } from "./fixtures";
import { getAllProductsRequest } from "../../actions/products/getAllProducts";

import "./catalogue.scss";

class Catalogue extends Component {

  componentDidMount() {
    const { getAllProductsRequest } = this.props;
    getAllProductsRequest();
  }

  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        <div className="men-catalogue">
          <MenBanner />
          <div className="men-catalogue__main-box">
            <div className="col-md-3 men-catalogue__main-box__side-bar" />
            <div className="col-md-9 men-catalogue__main-box__List">
              {products && products.map(data => (
                <ProductCard
                  key={data.product_id}
                  {...data}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Catalogue.propTypes = {
  products: PropTypes.array,
};

Catalogue.defaultProps = {
  products: null
};

const mapStateToProps = state => ({
  products: state.getAllProductsReducer.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllProductsRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogue);
