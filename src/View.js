import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Login.css';
import { Button, SVGIcon } from 'react-md';
import {DialogContainer, List, ListItem } from 'react-md';
import { TextField } from 'react-md'; 
import { Card, CardTitle, CardText, Slider } from 'react-md';
import Edit from './Edit';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
} from 'react-md';
const style={backgroundColor:"yellow"}
class View extends Component {
  constructor(props){
    super(props)
    this.state={
      visible:false,
      details:{}
    }
  }
  
  show = (data) => {
    this.setState({ visible: true,details:data});
  };

  hide = () => {
    this.setState({ visible: false });
  };
  render() {
    
     let handleAdder=this.props.handleadd;
     console.log(this.state.details)
      return (
        <div className="login" style={style} >
                <DataTable plain>
                    <TableHeader>
                    <TableRow>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Employee ID</TableColumn>
                        <TableColumn>Edit Employee</TableColumn>
                        <TableColumn>Delete Employee</TableColumn>
                    </TableRow>
                        </TableHeader>
                    <TableBody>
                        {this.props.empMember.map((data, i) => (
                            <TableRow>
                              <TableColumn>{data.name}</TableColumn>
                              <TableColumn>{data.id}</TableColumn>
                               <TableColumn> <Button onClick={()=>this.show(data)} raised>Edit</Button></TableColumn>
                               <TableColumn> <Button onClick={()=>this.props.delete(i)} raised primary swapTheming>Delete</Button></TableColumn>
                            </TableRow>
                    
                        ))}
                    </TableBody>                            
                   </DataTable>
                   {this.state.visible?<Edit data={this.state.details} handleEdit={this.props.edit} hide={()=>this.hide()}/>:""}

      </div>
    );
  }
}

export default View;
