import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName, changeDepart, changeArrive } from '../actions';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, FormGroup, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Plan extends Component { 
  constructor(props) {
    super(props);
    
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);

    this.handleName = this.handleName.bind(this);
    this.handleDepart = this.handleDepart.bind(this);
    this.handleArrive = this.handleArrive.bind(this);
    this.sumbitPage = this.sumbitPage.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleName(event) {
    this.props.handleName((event.target.value));
  }
  handleDepart(event) {
    this.props.handleDepart((event.target.value));
  }
  handleArrive(event) {
    this.props.handleArrive((event.target.value));
  }  
  sumbitPage() {
    if(this.props.place === '' || this.props.depart === '' || this.props.arrive === '') {
      {this.toggle();}
      console.log('알람');
    }
    else {
      window.location.hash = '#/buget';
    }
  }
  render() {
    return (
      <div>
        <h1>나의 여행 일정 만들기</h1>
        <div className="items">
          <div className="items_line1">
            <InputGroup size="lg">
              <InputGroupAddon addonType="prepend">여행장소</InputGroupAddon>
              <Input 
                placeholder="여행장소를 입력해주세요" 
                name="name"
                onChange={this.handleName}
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
                onChange={this.handleDepart}
              />
        
              <Label for="exampleDate">도착 시간</Label>
              <Input
                type="date"
                name="arrive"
                id="arriveDate"
                placeholder="date placeholder"
                onChange={this.handleArrive}
              />
            </FormGroup>
          </div>
          
          <div className="items_line3">
            <Button 
              outline color="success" 
              size="lg" 
              active onClick={this.sumbitPage}
            >
            일정 만들기
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>경고</ModalHeader>
              <ModalBody>
                내용을 빠짐 없이 입력해 주세요!
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>확인</Button>
              </ModalFooter>
            </Modal>
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

let mapDispatchToProps = (dispatch) => {
  return {
    handleName: (value) => dispatch(changeName(value)),
    handleDepart: (value) => dispatch(changeDepart(value)),
    handleArrive: (value) => dispatch(changeArrive(value))
  };
}

Plan = connect(mapStateToProps, mapDispatchToProps)(Plan);

export default Plan;
