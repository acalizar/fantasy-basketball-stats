import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header.js';
import Body from './containers/Body.js';
import Footer from './containers/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
