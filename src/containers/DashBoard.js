import React, { Component } from 'react';
import '../Login.css';
import Login from '../components/Login'; 
import { Card, CardTitle, CardText} from 'react-md';
import { TextField } from 'react-md'; 
import { Button, SVGIcon } from 'react-md';
import { TabsContainer, Tabs, Tab } from 'react-md';
import Add from '../components/Add';
import View from '../components/View';
import {connect} from "react-redux";

const style = { width: 400};
const name=["janaki","poornima","sreehari"]

class DashBoard extends Component {
      constructor(props){
        super(props)
        this.state={
          members:[]
        }
      }
handleAdd(nameRef,idRef){
 let empname = nameRef._field._field.value;
 let empid = idRef._field._field.value
 if(empname!="" && empid!=""){
  let obj={
    name:empname,
    id:empid
  }
  
  let memberArray = [...this.state.members,obj];
  this.setState({members:memberArray})
  // alert("Added Successfully") 
  nameRef._field._field.value = '';
  idRef._field._field.value = '';
 }
}

handleDelete(index){
      this.state.members.splice(index,1);
      let array=this.state.members;
       this.setState({members:array})
}

 handleEdit=(name,id,object)=>{
      let newObj={
        name:name.value,
        id:id.value
      }
    
  let k=this.state.members.indexOf(object)
  this.state.members[k]=newObj;
  this.setState({members:this.state.members})
  alert("edited successfully")
  name._field._field="";
  id._field._field="";
 }
  render() {
      return (
        <div className="login">
          <TabsContainer panelClassName="md-grid" colored>
            <Tabs tabId="simple-tab" style={{backgroundColor:"black"}}>
              <Tab label="Add">
               <Add handleadd={(name,id)=>this.handleAdd(name,id)}/>
              </Tab>
              <Tab label="View">
                <View empMember={this.state.members} delete={(id)=>this.handleDelete(id)} edit={(name,id,data)=>this.handleEdit(name,id,data)}  />
              </Tab>
            </Tabs>
          </TabsContainer>
      </div>
    );
  }
}

export default DashBoard;
