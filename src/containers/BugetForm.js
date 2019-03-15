import React, { Component } from 'react';

import { Button, InputGroup, InputGroupAddon, Input, FormGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class BugetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputBuget: '',
            items: []
          };
        
        this.addItem = this.addItem.bind(this);
        this.createTasks = this.createTasks.bind(this);
    }

    handleChange = (e) => {
        this.setState({
          inputBuget: e.target.value
        })
      }

    addItem(e) {
        if (this.state.inputBuget !== "") {
          const newItem = {
            text: this.state.inputBuget,
            key: Date.now()
          };
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem),
              inputBuget: '' 
            };
          });
        }
         
        e.preventDefault();
      }

    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        const listItems = this.state.items.map(this.createTasks);

        return (
            <div>
              <div className="form-wrapper">
                <InputGroup className="bugetInput" size="lg">
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
            
            </div>
        );
    }
}


export default BugetForm;