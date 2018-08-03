import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable'
import {Column}  from 'primereact/column';
import {Dialog}  from 'primereact/dialog';
import {InputText}  from 'primereact/inputtext';
import {Button}  from 'primereact/button';



export class Edit extends Component {

    constructor() {
        super();
        this.state = {};
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.onEmployeeelect = this.onEmployeeelect.bind(this);
        
    }

    componentDidMount() {
       

        this.setState({Employee: [
            {Name:'janaki', ID: '679769', Email: 'janakivenkatesh@cognizant.com', Designation: 'PA',Phonenumber: '9840107766'},
            {Name:'aarthy', ID: '679774', Email: 'aarthygurusamy@cognizant.com', Designation: 'PA',Phonenumber: '9840107866'},
            {Name:'sreehari', ID: '679806', Email: 'sreeharipariyadath@cognizant.com', Designation: 'PA',Phonenumber: '9840107166'},
            {Name:'ashok', ID: '679801', Email: 'ashokrmohan@cognizant.com', Designation: 'PA',Phonenumber: '9840107266'},
            {Name:'poornima', ID: '679858', Email: 'poornimathiyagarajan@cognizant.com', Designation: 'PA',Phonenumber: '9840104466'},

            
            

        ]});
    }

    save() {
        let Employee = [...this.state.Employee];
        if(this.newCar)
            Employee.push(this.state.car);
        else
            Employee[this.findSelectedCarIndex()] = this.state.car;

        this.setState({Employee:Employee, selectedCar:null, car: null, displayDialog:false});
    }

    delete() {
        let index = this.findSelectedCarIndex();
        this.setState({
            Employee: this.state.Employee.filter((val,i) => i !== index),
            selectedCar: null,
            car: null,
            displayDialog: false});
    }

    findSelectedCarIndex() {
        return this.state.Employee.indexOf(this.state.selectedCar);
    }

    updateProperty(property, value) {
        let car = this.state.car;
        car[property] = value;
        this.setState({car: car});
    }

    onEmployeeelect(e){
        this.newCar = false;
        this.setState({
            displayDialog:true,
            car: Object.assign({}, e.data)
        });
    }

    

    render() {
        
       
            let dialogFooter = <div className="ui-dialog-buttonpane ui-helper-clearfix">
                <Button icon="fa fa-close" label="Delete" onClick={this.delete}/>
                <Button label="Save" icon="fa fa-check" onClick={this.save}/>
          </div>;

        return (
            <div>
              

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Employee Detail List</h1>
                        
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.Employee}  rows={15} responsive={true}   
                               selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e)=>{this.setState({selectedCar:e.data});}}
                               onRowSelect={this.onEmployeeelect}>
                        <Column field="Name" header="Name"  />
                        <Column field="ID" header="ID"  />
                        <Column field="Email" header="Email" style={{width:'40%'}}/>
                        <Column field="Designation" header="Designation"  />
                        <Column field="Phonenumber" header="Phonenumber"  />
                    </DataTable>

                    <Dialog visible={this.state.displayDialog} header="Details" modal={true} footer={dialogFooter} onHide={() => this.setState({displayDialog: false})}>
                        {this.state.car && <div className="ui-grid ui-grid-responsive ui-fluid">
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="Name">Name</label></div>
                                <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                    <InputText id="Name" onChange={(e) => {this.updateProperty('Name', e.target.value)}} value={this.state.car.Name}/>
                                </div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="ID">ID</label></div>
                                <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                    <InputText id="ID" onChange={(e) => {this.updateProperty('ID', e.target.value)}} value={this.state.car.ID}/>
                                </div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="Email">Email</label></div>
                                <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                    <InputText id="Email" onChange={(e) => {this.updateProperty('Email', e.target.value)}} value={this.state.car.Email}/>
                                </div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="Designation">Designation</label></div>
                                <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                    <InputText id="Designation" onChange={(e) => {this.updateProperty('Designation', e.target.value)}} value={this.state.car.Designation}/>
                                </div>

                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="Phonenumber">Phonenumber</label></div>
                                <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                    <InputText id="Phonenumber" onChange={(e) => {this.updateProperty('Phonenumber', e.target.value)}} value={this.state.car.Phonenumber}/>
                                </div>
                        </div>
                        </div>
                        }
                        
                    </Dialog>
                </div>

               

            </div>
        );
    }
}
export default Edit;