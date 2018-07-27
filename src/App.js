import React, { Component } from 'react';

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
      <div className="App">
  {/*<Event/>*/}

  <img src={color}/>
      <Birthday/>

      </div>
    );
  }
}

export default App;
