import React, { Component } from 'react';
import MenBanner from '../../components/MenBanner';

import './menCatalogue.scss';

class MenCatalogue extends Component {
  constructor(props) {
    super(props);
  this.state = {

  }
  }
  render() {
    return (
      <div className="">
      <div className="men-catalogue"></div>
        <MenBanner />
        <div className="catalogue-box">
        <div className="catalogue-box__side-bar">
        </div>
        <div className="catalogue-box__List">
        </div>
        </div>
        </div>
    );
  }
}
export default MenCatalogue;