import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopNav from './components/TopNav';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenCatalogue from './pages/MenCatalogue';

export const ModalContext = React.createContext();

class App extends Component {

  state = {
    modalName: '',
    showModal: false
  }

  toggleModal = (modalName) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      modalName
    }))
  }

  render() {
    const { showModal, modalName } = this.state;
    return (
    <BrowserRouter>
      <div id="wrap">
        <ModalContext.Provider value={{modalName, showModal, toggleModal: this.toggleModal}}>
          <TopNav />
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/men-catalogue" component={MenCatalogue} />
          </Switch>
          <Footer />
        </ModalContext.Provider>
      </div>
    </BrowserRouter>);
  }
}
export default App;
