import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {ScrollPanel} from 'primereact/scrollpanel';
   import  o2 from '../src/o2.jpg';
   import {Accordion,AccordionTab} from 'primereact/accordion';
import {Dialog} from 'primereact/dialog';
import './App.css';

   
import {TabView,TabPanel} from 'primereact/tabview';

export default class Birthday extends Component {

    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }
     onClick(event) {
        this.setState({visible: true});
    }

    onHide(event) {
        this.setState({visible: false});
    }


    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1 style={{color:"white"}}>EVENTS</h1>
                       
                    </div>
                </div>
<div className="content-section implementation" >
                    <TabView >            
                   <TabPanel header="Sports Events" rightIcon="fa fa-futbol-o"  >
                        <div className="content-section implementation">
                     <Accordion multiple={true}>
                        <AccordionTab header="Carrom">
                            <h2>Team : Team 1 </h2>
                           <h2>Time : 5:00 pm</h2>
                           <h2>venue : Cafetaria, 9th floor, g4 block.</h2>
                        </AccordionTab>
                        <AccordionTab header="Table Tennis">
                           <h2>Team : Team 3 </h2>
                           <h2>Time : 5:30 pm</h2>
                           <h2>venue : Recreation Room, 9th floor, g4 block.</h2>
                        </AccordionTab>
                        </Accordion>
                        </div>
                        </TabPanel>
                        
                        <TabPanel header="Meetings" rightIcon="pi pi-user">
                       
                          <div className="content-section implementation">
                    <Accordion multiple={true}>
                        <AccordionTab header="Standup meeting">
                            
 
                           <h2>Time: Respective teams's decision</h2>
                           <h2>venue: Respective teams's decision</h2>
                        </AccordionTab>
                        <AccordionTab header="Manager meeting">
                           <h2>Time: 2:00 pm</h2>
                             <h2>Venue: Starling</h2>
                        </AccordionTab>
                    </Accordion>
                </div>
                        </TabPanel>


      <TabPanel header="Team-out"  rightIcon="fa fa-cutlery" contentClassName="content-section implementation">


       <div className="content-section implementation">
                    <Dialog header="Dining" visible={this.state.visible} width="500px" modal={true}  onHide={this.onHide} >
                         <div>
                             
 
                         <h2>Team 1 : No Plans</h2>
                         <h2>Team 2 : Dining , 7:00 pm , BBQ</h2>
                         </div>
                    </Dialog>

                    <Button label="show"  onClick={this.onClick} />
                </div>
           </TabPanel>
         </TabView>
    </div>
            </div>
        )    
        }
        }