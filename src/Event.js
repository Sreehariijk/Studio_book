import React, {Component} from 'react';
import {TabMenu} from 'primereact/tabmenu';


export default class Event extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {label: 'Birthday', icon: 'fa fa-birthday-cake'},
                {label: 'Meetings', icon: 'fa fa-fw fa-calendar'},
                {label: 'Team-out', icon: 'fa fa-fw fa-book'},
                
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction" >
                    <div className="feature-intro" >
                        <h1>EVENTS</h1>
                       
                    </div>
                </div>

                <div className="content-section implementation">
                    <TabMenu model={this.state.items}  />
                </div>
            </div>
        );
    }
}