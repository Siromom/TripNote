import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Plan from "./Plan";
import Buget from "./Buget";


class App extends Component {
  
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      depart: '',
      arrive: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    if(e.target.name == 'name') {
      this.setState({
        name: e.target.value
      });
    }
    else if(e.target.name == 'depart') {
      this.setState({
        depart: e.target.value
      });
    }
    else if(e.target.name == 'arrive') {
      this.setState({
        arrive: e.target.value
      });
    }
    
  }

  handleSubmit = () => {

    if(this.state.name == '' || this.state.depart == '' || this.state.arrive == '') {
      console.log ('알람');  
    }
    else {
      window.location.hash = '#/buget';
    }
  }
    
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Trip Note</h1>
          <div className="content">
            <Route exact path="/" render={ () => ( 
              <Plan 
                name={this.state.name} depart={this.state.depart} arrive={this.state.arrive}
                handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
              )}
            />
            <Route path="/buget" render={ () => (
              <Buget 
                name={this.state.name} depart={this.state.depart} arrive={this.state.arrive}/>
             )}
            />
            
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
