import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginPage from './container/LoginPage';
//import NewsFeed from './container/NewsFeed';
import NewsFeedPage from './container/NewsFeedPage';
import './App.css';
import UserSearch from './UserSearch';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/dashboard" component={NewsFeedPage}/>
        <Route exact path="/Search" component={UserSearch} />
       </Switch>
      </Router> 
    );
  }
}

export default App;