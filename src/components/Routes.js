import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import HomePage from '../pages/HomePage';


const Routes = () => (
  <BrowserRouter>
    <div id="wrap">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
