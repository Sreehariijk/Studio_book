import React, { Component } from 'react';
import './Login.css';
import { SelectionControlGroup } from 'react-md';
import Login from "./Login"; 	 

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state={
             caption:"Employee Login",
             subcaption:"Employees Type your credentials here"
        }
    }
    
      handleLoginType(value){

          if(value=="E"){
               this.setState({caption:"Employee Login",subcaption:"Employees Type your credentials here"})
          }
          else if(value=="M"){
               this.setState({caption:"Manager Login",subcaption:"Managers Type your credentials here"})
          }
      }
  render() {
    return (
      <div className="login">
           <SelectionControlGroup id="selection-control-group-radios" name="radio-example" type="radio" label="" defaultValue="E"
            onChange={this.handleLoginType.bind(this)} controls={[{ label: 'Manager',value: 'M'}, {label: 'Employee',value: 'E'}]} />
 
           <Login title={this.state.caption} subtitle={this.state.subcaption}  history={this.props.history}/>
      </div>
   );
  }
}

export default LoginPage;
