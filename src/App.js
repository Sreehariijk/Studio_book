import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginPage from './container/LoginPage';
//import NewsFeed from './container/NewsFeed';
import NewsFeedPage from './container/NewsFeedPage';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/dashboard" component={NewsFeedPage}/>
        
       </Switch>
      </Router> 
    );
  }
}

export default App;