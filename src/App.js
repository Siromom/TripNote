import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from "./container/Main";

import Plan from "./components/Plan";
import Buget from "./components/Buget";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Trip Note</h1>
          
          <div className="content">
            <Route exact path="/" component={ Main }/>
            <Route path="/plan" component={ Plan }/>
            <Route path="/buget" component={ Buget }/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
