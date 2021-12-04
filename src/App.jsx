import React, { Component } from 'react';
import { Provider } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import store from './store'
import { Header } from './containers/header';
import Routes from "./routes"

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Header />
          <Routes />
        </Provider>
    );
  }
}

export default App;