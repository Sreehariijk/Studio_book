import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../Login.css';
import Login from '../components/Login'; 
import { Card, CardTitle, CardText} from 'react-md';
import { TextField } from 'react-md'; 
import { Button, SVGIcon } from 'react-md';
import { TabsContainer, Tabs, Tab } from 'react-md';
import {connect} from "react-redux";

const style = { width: 400};
class Add extends Component {

      
  render() {
   let handleAdder=this.props.handleadd;

      return (
        <div className="login">

         <Card style={style} className="md-block-centered">
                  <CardTitle title="Add Employee"/>
                  <CardText>  
                    <div className="md-grid"> 
                      <TextField id="name" ref={(TextField)=>this.nameRef =(TextField)} label="Name"  lineDirection="center"  placeholder="Name" className="md-cell md-cell--bottom" />
                      </div>
                      <div className="md-grid">
                      <TextField id="id" ref={(TextField)=>this.idRef =(TextField)} label="Id" type="text" className="md-cell md-cell--bottom"/>    
                      </div>
                      <br/>  
                    <Button onClick={() => handleAdder(this.nameRef,this.idRef)}  raised primary swapTheming>Add</Button>  
                  </CardText>
           </Card>
      </div>
    );
  }
}


export default Add;
