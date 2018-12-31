/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';

import '../styles/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Fragment>
              <div className="container">
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </div>
            </Fragment>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
