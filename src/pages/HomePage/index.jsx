import React, { Component } from 'react';
import SaleBanner from '../../components/SaleBanner';
import PopBanner from '../../components/PopBanner';
// import Login from '../../components/Login';
import Signup from '../../components/Signup'
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
        <SaleBanner />
        <PopBanner toggleModal={this.toggleModal}/>
        <DiscountBanner />
        {/* {modalOpen && <Login modalClose={this.toggleModal}/>} */}
        {modalOpen && <Signup modalClose={this.toggleModal}/>}
      </div>
    );
  }
}
export default Home;