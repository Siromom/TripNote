import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBuget, delBuget, addUsed } from '../actions';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  Button, InputGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class BugetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputContent: '',
            inputBuget: '',
            items: [],
            total: 0,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);

        this.addItem = this.addItem.bind(this);       
        this.delItem = this.delItem.bind(this);
        this.createTasks = this.createTasks.bind(this);
        this.handleTotal = this.handleTotal.bind(this);
        this.handleTotalMinus = this.handleTotalMinus.bind(this);
        this.handleUsed = this.handleUsed.bind(this);
        
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    handleChange = (e) => {
        this.setState({
          inputBuget: e.target.value
        })
    }

    handleContentChange = (e) => {
      this.setState({
        inputContent: e.target.value
      })
  }
    
    addItem(e) {
        const input = parseInt(this.state.inputBuget);

        if (isNaN(input) === false && this.state.inputContent !== '') {
          const newItem = {
            name: this.state.inputContent,
            number: parseInt(this.state.inputBuget),
            key: Date.now(),
            checked: false
          };
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem),
              inputContent: '',
              inputBuget: '' 
            };
          });
          this.handleTotal(newItem.number);
        }
        else {
            this.toggle();
        }
        
        e.preventDefault();
    }

    delItem(key) {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        const unfilteredItems = this.state.items.filter(function (item) {
            return (item.key === key);
        });

        this.setState({
            items: filteredItems
        });

        this.handleTotalMinus(parseInt(unfilteredItems[0].number));
    }

    handleTotal(num) {
        this.props.handleTotal(num);
    }

    handleTotalMinus(num) {
        this.props.handleTotalMinus(num);
    }

    handleUsed(key) {
        const unfilteredItems = this.state.items.filter(function (item) {
            
            return (item.key === key);
        });

        unfilteredItems[0].checked = true;

        this.props.handleUsed(parseInt(unfilteredItems[0].number));    
    }

    createTasks(item) {
      if(item.checked === false) {
        return <li className="false" 
                  key={item.key}
                  onClick={() => {this.handleUsed(item.key)}}>
                  {item.name} : {item.number} 원
                  <button className="delete" 
                          onClick={() => {this.delItem(item.key)}}>
                  x    
                  </button>
              </li>
      }
      else {
        return <li className="true" 
                  key={item.key}>
                  {item.name} : {item.number} 원
              </li>
      }
      
    }

    render() {
        const listItems = this.state.items.map(this.createTasks);
        
        return (
            <div>
              <div className="form-wrapper">
                <InputGroup className="bugetInput" size="lg">
                  <Input 
                    value={this.state.inputContent}
                    onChange={this.handleContentChange}
                    placeholder="내용" 
                  />
                  <Input 
                    value={this.state.inputBuget}
                    onChange={this.handleChange}
                    placeholder="금액" 
                  />
                </InputGroup>
                <Button 
                  className="plusBtn"
                  outline color="warning" 
                  size="lg" 
                  active onClick={this.addItem}>추가
                </Button> 
              </div>
              
              <div className="items-wrapper">
                <ul className="theList">
                  { listItems }
                </ul>
              </div>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>경고</ModalHeader>
              <ModalBody>
                내용과 금액을 정확히 입력하세요!
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>확인</Button>
              </ModalFooter>
            </Modal>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
      totalBuget: state.bugets.totalBuget,
      usedBuget: state.bugets.usedBuget
    }
  }

let mapDispatchToProps = (dispatch) => {
    return {
      handleTotal: (value) => dispatch(addBuget(value)),
      handleTotalMinus: (value) => dispatch(delBuget(value)),
      handleUsed: (value) => dispatch(addUsed(value)),
    };
  }
  
  BugetForm = connect(mapStateToProps, mapDispatchToProps)(BugetForm);

export default BugetForm;