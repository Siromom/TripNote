import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Plan from "./Plan";
import Buget from "./Buget";
import Header from "../components/Header";

class App extends Component {    
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Trip Note</h1>
          <Header />
          <div className="content">
            <Route exact path="/" component={ Plan } />
            <Route path="/buget" component={ Buget } />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
