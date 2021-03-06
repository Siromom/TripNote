import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import BugetForm from '../containers/BugetForm';

class Buget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.place} 예산 계획</h1>
        <div className="bugetCal">
          <div className="items_line1">
            <Alert color="primary">
                예상 지출액은 @@ 원 입니다.
            </Alert>
            <Alert color="danger">
                남은 예산은 @@ 원 입니다.
            </Alert>
          </div>
        
          <div className="bugets">
            <h3>예산을 입력하세요.</h3>
            <section>
              <BugetForm />
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
