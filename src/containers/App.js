import React, { Component } from 'react';
import '../App.css';
import WebFontLoader from 'webfontloader';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import LoginPage from "../containers/LoginPage"; 	
import HomePage from "../containers/HomePage"; 	 
import DashBoard from "../containers/DashBoard"; 
import Edit from "../components/Edit";  

 	WebFontLoader.load({
     	google: {
     	families: ['Roboto:300,400,500,700', 'Material Icons'],
     	},
 	});


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/homePage" component={HomePage}/>
            <Route exact path="/dashboard" component={DashBoard}/>
             <Route exact path="/edit" component={Edit}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
