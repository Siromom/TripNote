import React, { Component } from 'react';
import { Alert } from 'reactstrap';

import Header from "../components/Header";

class Buget extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>{this.props.name} 의 예산 계획</h1>
        <div className="items">
          <div className="items_line1">
            <Alert color="primary">
                예상 지출액은 @@ 원 입니다.
            </Alert>
            <Alert color="danger">
                남은 예산은 @@ 원 입니다.
            </Alert>
          </div>
        
          <div className="bugetList">
            예산 리스트
          </div>
        </div>
      </div>
    );
  }
}

export default Buget;
