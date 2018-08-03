import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';


export default class UserSearch extends Component {

    constructor() {
        super();
        this.state = {
            
        }; 
    }

    componentDidMount() {
        this.setState({users: [
                    {Name:'Janaki', ID: '679769', Email: 'janakivenkatesh@cognizant.com', Designation: 'SA',Phonenumber: '9840562896'},
                    {Name:'Aarthy', ID: '679774', Email: 'aarthygurusamy@cognizant.com', Designation: 'SA',Phonenumber: '9856315964'},
                    {Name:'Sreehari', ID: '679806', Email: 'sreeharipariyadath@cognizant.com', Designation: 'Manager',Phonenumber: '9698745316'},
                    {Name:'Ashok', ID: '679801', Email: 'ashokrmohan@cognizant.com', Designation: 'SA',Phonenumber: '9497319025'},
                    {Name:'Poornima', ID: '679858', Email: 'poornimathiyagarajan@cognizant.com', Designation: 'Manager',Phonenumber: '8965478965'},        
                ]}); 
    }

    render() {
        var header = <div style={{'textAlign':'left'}}>
                        <i className="fa fa-search" style={{margin:'4px 4px 0 0'}}></i>
                           <InputText type="search" ref={(InputText) => this.inputs = (InputText)}
                            placeholder="Search" size="50" />
                           <Button onClick={(e) => this.setState({globalFilter: this.inputs.inputEl.value})} label="Search"></Button>
                     </div>;

        return (
            <div>
                <div>  
                    <h1>Search</h1>
                </div>

                <div className="content-section implementation">
                    <DataTable ref={(el) => this.dt = el} value={this.state.users} paginator={true} rows={10} header={header}
                        globalFilter={this.state.globalFilter}>
                        <Column field="Name" header="Name" visibility="hidden"/>
                        <Column field="ID" header="ID" />
                        <Column field="Email" header="Email" />
                        <Column field="Designation" header="Designation"  />
                        <Column field="Phonenumber" header="Phonenumber" />
                    </DataTable>
                    
                </div>
            </div>
        );
    }
}

