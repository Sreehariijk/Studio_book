import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddEmployees from './AddEmployees';
import ViewPage from './ViewPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
           
            <Switch>
              <Route exact path='/' component={AddEmployees} />
              <Route exact path='/ViewPage' component={ViewPage} />
            </Switch>
           
        </div>
      </Router>
    );
  }
}

export default App;
