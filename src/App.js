import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { simpleAction } from './actions/simpleAction';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SaleBanner from './components/SaleBanner';
import PopBanner from './components/PopBanner';
import DiscountBanner from './components/DiscountBanner';

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <div className="hero-1" />
        </header>
        <SaleBanner />
        <PopBanner />
        <DiscountBanner />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })
export default connect(mapStateToProps, mapDispatchToProps)(App);
