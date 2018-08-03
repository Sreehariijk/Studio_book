import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginPage from './container/LoginPage';
//import NewsFeed from './container/NewsFeed';
import NewsFeedPage from './container/NewsFeedPage';
import './App.css';
// import Event from './Event.js';
import Birthday from './Birthday.js';
import  color from '../src/color.jpg';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/dashboard" component={NewsFeedPage}/>
         <Route exact path="/birthday" component={Birthday}/>
        
       </Switch>
      </Router> 

    );
  }
}

export default App;