import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import c1 from '../container/c1.jpg';
import c2 from '../container/c2.jpg';
import c3 from '../container/c3.jpg';
import c4 from '../container/c4.png';
import c5 from '../container/c5.jpg';
import {ScrollPanel} from 'primereact/scrollpanel';
import {TabView,TabPanel} from 'primereact/tabview';
import { Badge,  SVGIcon } from 'react-md';

class NewsFeedPage extends React.Component {
  
    
    
    constructor() {
       super();
         
       this.state = {
          data:[
             {
                message: 'Cognizant Technology Solutions Corp., the biggest U.S. sponsor of H-1B visas for foreign information technology specialists, says a civil rights lawsuit accusing the firm of bias against workers who arent from India is all wrong.',
                pic: 'News1',
                image:c1
             },
             {
                message: 'Cognizant Wins Three APEX Awards for Publication Excellence',
                pic: 'News2',
                image:c2
             },
             {
                message: 'Cognizants Employee Volunteering Program Outreach Impacts 450,000 Lives in First Decade More than 100,000 employees clock in 2 million hours of volunteering to make a difference in the areas of education, community welfare and environment',
                pic: 'News3',
                image:c3
             },
             {
                message: 'EXPERTISE AND INNOVATION FOR THE GREATER GOOD',
                pic: 'News4',
                image:c4
             },
             {
                message: 'In a feature on corporate social responsibility (CSR), Forbes (India) magazine makes a special mention of Cognizant’s corporate volunteering program, Outreach. “Since the program was set up, 20,000 employees have volunteered and have spent a cumulative 2 lakh volunteering hours,” the magazine notes. “Employees take classes, provide career counseling, as well as teach computer science and English to students in schools. In India, the program has touched about 100 schools.”',
                pic: 'News5',
                image:c5
             }
          ]
       }
    }
      render () {
          return (
              <div>
                 
                 <div className="ui-g-12 ui-md-4">
                 <Badge badgeContent={12} primary badgeId="notifications-1">
      <Button icon>notifications</Button>
    </Badge>
                            <ScrollPanel style={{width: '100%', height: '1000px'}} className="custombar1">
               
                 <div>
                {this.state.data.map((data, i) =>  {return <div>
                <div>
                    <div>{data.pic}</div>
                    <div>{data.message}</div>
                    <div> <img src = {data.image} /> </div>
                   <br></br>
                </div>
                </div>}
                   )}
                   
             </div>
                            </ScrollPanel>
            </div>
                   
             </div>

          );
    }
      
}
export default NewsFeedPage;