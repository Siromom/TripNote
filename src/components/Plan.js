import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, FormGroup, Label } from 'reactstrap';

import Header from "../components/Header";

class Plan extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e) => {
    this.props.handleChange();
  }
  handleSubmit = (e) => {
    this.props.handleSubmit();
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
              <Input 
                placeholder="여행장소를 입력해주세요" 
                onChange={this.props.handleChange}
                name="name"
              />
            </InputGroup>
          </div>
          
          <div className="items_line2">
            <FormGroup>
              <Label for="exampleDate" >출발 시간</Label>
              <Input
                type="date"
                name="depart"
                id="departDate"
                placeholder="date placeholder"
                onChange={this.props.handleChange}
              />
        
              <Label for="exampleDate">도착 시간</Label>
              <Input
                type="date"
                name="arrive"
                id="arriveDate"
                placeholder="date placeholder"
                onChange={this.props.handleChange}
              />
            </FormGroup>
          </div>
          
          <div className="items_line3">
            <Button 
              outline color="success" 
              size="lg" 
              active onClick= {this.props.handleSubmit}
            >
            일정 만들기
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Plan;
