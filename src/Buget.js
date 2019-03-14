import React, { Component } from 'react';

class Buget extends Component {
  render() {
    return (
      <div>
        <h1>예산 설정</h1>
        <ol>
          <li>예상 지출액</li>
          <li>남은 예산</li>
          <li>일별 예산 리스트</li>
        </ol>
      </div>
    );
  }
}

export default Buget;
