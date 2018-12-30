/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/style.css';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
