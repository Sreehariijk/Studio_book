import React, {Component} from 'react';
import {Schedule} from 'primereact/schedule';
import {Accordion, AccordionTab} from 'primereact/accordion';
import './App.css';
import {Button} from 'primereact/button';
import {Fieldset} from 'primereact/fieldset';
import{BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import New from './New';
import Part from './Part';
import Talent from './Talent';
import Women from './Women';
import Cog from './Cog';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <Router>
             <Switch>
         <Route exact path="/" component={Main}/> 
        <Route exact path="/New" component={New}/>
          <Route exact path="/Part" component={Part}/> 
            <Route exact path="/Talent" component={Talent}/> 
              <Route exact path="/Women" component={Women}/> 
                <Route exact path="/Cog" component={Cog}/> 
          </Switch>
               </Router>
            
        );
    }
}
export default App;