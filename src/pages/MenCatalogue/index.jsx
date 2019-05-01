import React, { Component } from 'react';
import MenBanner from '../../components/MenBanner';
import ProductCard from '../../components/ProductCard';
import { products } from './fixtures';

import './menCatalogue.scss';

class MenCatalogue extends Component {
  constructor(props) {
    super(props);
  this.state = {

  }
  }

  // componentDidMount() {
  //   const { getAllProducts: getEntriesRequest } = this.props;
  //   getEntriesRequest();
  // }

  render() {
    return (
      <div>
      <div className="men-catalogue">
        <MenBanner />
        <div className="men-catalogue__main-box">
        <div className="col-md-3 men-catalogue__main-box__side-bar">
        </div>
        <div className="col-md-9 men-catalogue__main-box__List">
        {products.map(product => (
        <ProductCard
        image={product.thumbnail}
        name={product.name}
        price={product.price}
        />
        )
        )}
        </div>
        </div>
        </div>
        </div>
    );
  }
}
export default MenCatalogue;