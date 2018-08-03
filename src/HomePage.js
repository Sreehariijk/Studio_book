import React, { Component } from 'react';
import './Login.css';
import { Card, CardTitle, CardText} from 'react-md';
import { TextField } from 'react-md'; 
import { Button, SVGIcon } from 'react-md';
import DashBoard from "./DashBoard";
import {connect} from "react-redux";
 
const logOutStyle = { display:"inline-block",float: "right"};
const headerStyle ={ display:"inline-block"}
class HomePage extends Component {
handleLogout(){
  this.props.history.push("/");
}
  render() {
    return (
      <div className="login">
       <h3 style={headerStyle}>Welcome {this.props.username}</h3>
        <Button style={logOutStyle} onClick={()=>this.handleLogout()}  raised primary swapTheming>Logout</Button>       
        <DashBoard/>      
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
     username:state.loginReducer.username
  }
}

export default connect(mapStateToProps)(HomePage);
