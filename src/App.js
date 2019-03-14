import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Plan from "./Plan";
import Buget from "./Buget";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Trip Note</h1>
          <ul className="header">
            <li><NavLink to ="/plan">일정</NavLink></li>
            <li><NavLink to ="/buget">예산</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/plan" component={ Plan }/>
            <Route exact path="/buget" component={ Buget }/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
