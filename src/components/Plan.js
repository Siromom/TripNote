import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Form, FormGroup, Label, FormText } from 'reactstrap';

import Header from "../components/Header";

class Plan extends Component {
  makePlan() {
    window.location.hash = '#/buget';
  }
    
  render() {
    return (
      <div>
        <Header />
        <h1>나의 여행 일정 만들기</h1>
        <div className="items">
          <div className="items_line1">
            <InputGroup size="lg">
              <InputGroupAddon addonType="prepend">여행장소</InputGroupAddon>
              <Input placeholder="여행장소를 입력해주세요" />
            </InputGroup>
          </div>
          
          <div className="items_line2">
            <FormGroup>
              <Label for="exampleDate" >출발 시간</Label>
              <Input
                type="date"
                name="date"
                id="departDate"
                placeholder="date placeholder"
              />
        
              <Label for="exampleDate">도착 시간</Label>
              <Input
                type="date"
                name="date"
                id="arriveDate"
                placeholder="date placeholder"
              />
            </FormGroup>
          </div>
          
          <div className="items_line3">
            <Button outline color="success" size="lg" active onClick={this.makePlan}>일정 만들기</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Plan;
