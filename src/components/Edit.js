import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../Login.css';
import { Button, SVGIcon } from 'react-md';
import { TextField } from 'react-md'; 
import { Card, CardTitle, CardText, Slider } from 'react-md';
import {
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn
} from 'react-md';

const style={maxWidth:320}
class Edit extends Component { 


  render() {
      return (
        <div className="login" >
            <Card style={style} className="md-block-centered">
              <CardTitle title="Edit" subtitle="" />
               <TextField id="floating-password"  label="Name" type="text"  defaultValue={this.props.data.name} ref={(TextField)=>this.nameRef=(TextField)} className="md-cell md-cell--bottom"/>
               <TextField id="floating-password"  label="Id" type="text"  defaultValue={this.props.data.id}  ref={(TextField)=>this.idRef=(TextField)} className="md-cell md-cell--bottom"/>        
               <Button onClick={(nameRef,idRef,data)=>this.props.handleEdit(this.nameRef,this.idRef,this.props.data)}  raised primary swapTheming>Save</Button> 
                <Button onClick={()=>this.props.hide()}  raised primary swapTheming>Close</Button>   
              <br/>
           </Card>      
       </div>
    );
  }
}

export default Edit;
