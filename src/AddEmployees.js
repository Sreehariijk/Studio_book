import React, { Component } from 'react';
import { TextField } from 'react-md';
import ViewPage from './ViewPage';
import { Button, SVGIcon } from 'react-md';
import corp from './corp.jpg'
import { DatePicker } from 'react-md';
import { DialogContainer, List, ListItem } from 'react-md';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'react-md';
import {
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn,
} from 'react-md';

const style = { maxWidth: 400, marginTop: 50 };
const emp = [{
    firstname: '',
    lastname: '',
    id: '',
    date: '',
    email: '',
    number: '',
    des: ''
},
];
 

export default class AddEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emp: []
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onAdd = this.onAdd.bind(this);
     
    }
    onAdd(firstname, lastname, id, date, email, number, des) {
        
        let empObj = {};
        empObj.firstname = firstname;
        empObj.lastname = lastname;
        empObj.id = id;
        empObj.date = date;
        empObj.email = email;
        empObj.number = number;
        empObj.des = des;
        let empArryObj = [...this.state.emp, empObj]
        console.log(empArryObj);
        this.setState({ emp: empArryObj });
        alert("Details Added");
    }
    onSubmit(event) {
        event.preventDefault();
        this.onAdd(this.fnameInput.value, this.lnameInput.value, this.employeeInput.value, this.dateInput.value, this.emailInput.value, this.numberInput.value, this.designInput.value);
        this.fnameInput._field._field.value = '';
        this.lnameInput._field._field.value = '';
        this.employeeInput._field._field.value = '';
        this.dateInput._field._field.value = '';
        this.emailInput._field._field.value = '';
        this.numberInput._field._field.value = '';
        this.designInput._field._field.value = '';
          
    }
    onDialog(){

    }
    
    render() {
        console.log('render', this.state.emp)
        const { visible } = this.state;
        return (
          <div>
             <center> <bold><h2>ADD EMPLOYEE DETAILS</h2></bold></center>
              <div className="md-grid">
                   <div className="md-grid md-cell--6">
            {/*<Card style={style} className="md-block-centered ">
                    <CardTitle title="Add Employees" />
                    <CardText>*/}
                      
                            <TextField placeholder="Firstname" ref={TextField => this.fnameInput = TextField} />
                      
                        <br/>
                        
                            <TextField placeholder="Lastname" ref={TextField => this.lnameInput = TextField} />
                        
                        <br/>
                      
                            <TextField placeholder="Employee ID" ref={TextField => this.employeeInput = TextField} />
                         <br/>
                            <TextField placeholder="Date of Birth" ref={TextField => this.dateInput = TextField} />
                         <br/>
                            <TextField placeholder="Email" ref={TextField => this.emailInput = TextField} />
                         <br/>
                            <TextField placeholder="Mobile Number" ref={TextField => this.numberInput = TextField} />
                         <br/>
                            <TextField placeholder="Designation" ref={TextField => this.designInput = TextField} />
                         <br/>
                        <div className="bt bt_primary">

                            <Button raised onClick={this.onSubmit}>Add</Button>
                        </div>
                     {/*</CardText>
                </Card>*/}
                </div>
               <div className="md-grid md-cell--6">
                               <img src={corp}/>     
                   </div>
                   </div>
                
                <div className="tab"> 
                     <DataTable plain>
            <TableHeader>
              <TableRow>
               <TableColumn>Firstname</TableColumn>
              <TableColumn>Lastname</TableColumn>
              <TableColumn>Emp_ID</TableColumn>
              <TableColumn>Date_Of_Birth</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Ph_Number</TableColumn>
              <TableColumn>Designation</TableColumn>
              </TableRow>
              </TableHeader>
              </DataTable>
                     {
            this.state.emp.map(emps => {
              return (
                  <ViewPage key={emps.id} {...emps} />
              );
            })
          }
                    </div>
                    </div>
        
        );
    }
}
AddEmployees.propTypes = {
   fnameInput: PropTypes.string,
    //    propArray: PropTypes.array.isRequired,
    //    propBool: PropTypes.bool.isRequired,
    //    propFunc: PropTypes.func,
    //    propNumber: PropTypes.number,
    //    propString: PropTypes.string,
};