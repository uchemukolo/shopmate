import React, { Component } from 'react';
import SaleBanner from '../../components/SaleBanner';
import PopBanner from '../../components/PopBanner';
import { userSignupRequest } from '../../actions/auth/signup';
import { userLoginRequest } from '../../actions/auth//login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signup from '../../components/Signup';
import DiscountBanner from '../../components/DiscountBanner';
import './homePage.scss';

class Home extends Component {
  state = {
    modalOpen: false,
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    const {
      modalOpen
    } = this.state;

    return (
      <div className="App">
      <div className="hero-1"></div>
        <SaleBanner />
        <PopBanner toggleModal={this.toggleModal}/>
        <DiscountBanner />
        {/* {modalOpen && <Login userLoginRequest={this.props.userLoginRequest} modalClose={this.toggleModal}/>} */}
        {modalOpen && <Signup userSignupRequest={this.props.userSignupRequest} modalClose={this.toggleModal}/>}
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