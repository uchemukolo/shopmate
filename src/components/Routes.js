import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import TopNav from "./TopNav";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import MenCatalogue from "../pages/MenCatalogue";

const Routes = () => (
  <BrowserRouter>
    <div id="wrap">
      <TopNav />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/men-catalogue" component={MenCatalogue} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Routes;
