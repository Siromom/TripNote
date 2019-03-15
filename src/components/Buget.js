import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import BugetItems from '../containers/BugetItems';

class Buget extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if(this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          itmes: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{this.props.place} 예산 계획</h1>
        <div className="items">
          <div className="items_line1">
            <Alert color="primary">
                예상 지출액은 @@ 원 입니다.
            </Alert>
            <Alert color="danger">
                남은 예산은 @@ 원 입니다.
            </Alert>
          </div>
        
          <div className="bugets">
            <h1>예산 입력</h1>
            <section className="form-wrapper">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                  placeholder="금액">
                </input>
                <button type="submit">추가</button> 
              </form> 
            </section>
            <section className="todos-wrapper">
              <BugetItems />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    place: state.plans.place,
    depart: state.plans.depart,
    arrive: state.plans.arrive
  }
}

Buget = connect(mapStateToProps)(Buget);

export default Buget;
