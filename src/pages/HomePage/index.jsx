import React, { Component } from 'react';
import SaleBanner from '../../components/SaleBanner';
import PopBanner from '../../components/PopBanner';
import { userSignupRequest } from '../../actions/auth/signup';
import { userLoginRequest } from '../../actions/auth//login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../../components/Login';
import Signup from '../../components/Signup';
import Button from '../../components/Button';
import DiscountBanner from '../../components/DiscountBanner';
import './homePage.scss';

class Home extends Component {

  render() {
    return (
      <div>
      <div className="hero-1">
      <div className="hero-1__wrap">
      <div className="hero-1__wrap__title">
        MEN & WOMEN FASHION
        <p className="hero-1__wrap__sub-title">
          Cheap & Quality
        </p>
        </div>
        <div>
          <Button name="SHOP NOW" classes="big-btn" />
        </div>
      </div>
      </div>
      <SaleBanner />
      <PopBanner />
      <DiscountBanner />
      <Login userLoginRequest={this.props.userLoginRequest} />
      <Signup userSignupRequest={this.props.userSignupRequest} />
      </div>)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userSignupRequest,
  userLoginRequest
},
dispatch
);

export default connect(null, mapDispatchToProps)(Home);