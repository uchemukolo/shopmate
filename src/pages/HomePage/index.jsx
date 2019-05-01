import React, { Component } from 'react';
import SaleBanner from '../../components/SaleBanner';
import PopBanner from '../../components/PopBanner';
import { userSignupRequest } from '../../actions/auth/signup';
import { userLoginRequest } from '../../actions/auth//login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signup from '../../components/Signup';
import Login from '../../components/Login';
import Button from '../../components/Button';
import DiscountBanner from '../../components/DiscountBanner';
import './homePage.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  this.state = {
    modalOpenRegister: false,
    modalOpenLogin: false,
  }
  }
  toggleModal = (e) => {
    console.log('hello:===', e.target.name);

    const {
      modalOpenRegister,
      modalOpenLogin
    } = this.state;

    switch (e.target.name) {
      case 'Register':
        this.setState({
          modalOpenRegister: !modalOpenRegister,
        })
        break;
        case 'Shop Now':
        this.setState({
          modalOpenLogin: !modalOpenLogin,
        })
        break;
      default:
        break;
    }
  }

  render() {
    const {
      modalOpenLogin,
      modalOpenRegister
    } = this.state;

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
        <SaleBanner toggleModal={this.toggleModal}/>
        <PopBanner toggleModal={this.toggleModal}/>
        <DiscountBanner />
        {modalOpenLogin && <Login userLoginRequest={this.props.userLoginRequest} name="Shop Now" modalClose={this.toggleModal}/>}
        {modalOpenRegister && <Signup userSignupRequest={this.props.userSignupRequest} name="Register" modalClose={this.toggleModal}/>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userSignupRequest,
  userLoginRequest
},
dispatch
);

export default connect(null, mapDispatchToProps)(Home);