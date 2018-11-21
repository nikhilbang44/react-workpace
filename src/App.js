import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React APP </h1>
        <p> This is really working! </p>
        < Person name="max" age="28" />
        < Person name = "mak" age = "28" />
        < Person name = "pavan" age = "28" />
      </div>
    );
  }
}

export default App;
