import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { 
        name: 'Max',
        age: 28
       },
      {
        name: 'Manu',
        age: 28
      },
      {
        name: 'Step',
        age: 28
      }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { 
          name: newName,
          age: 25
         },
        {
          name: 'Nikhil',
          age: 26
        },
        {
          name: 'OK',
          age: 28
        }
      ]}
    )


  }


  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Gopal', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Akki', age: 26 }
      ]
    } )
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, I'm a React APP </h1>
        <p> This is really working! </p>
        <button style= {style}
         onClick={() => this.switchNameHandler('Kapil!')}>Switch Name</button>
        < Person click= { this.switchNameHandler }
                 name = { this.state.persons[0].name } 
                 age = { this.state.persons[0].age }/>
        < Person click= { this.switchNameHandler } 
                  name = { this.state.persons[1].name }
                  age = { this.state.persons[1].age }
                  changed={ this.nameChangedHandler }>My Hobbies: playing chess</Person>
        < Person click= { this.switchNameHandler.bind(this, 'Priti') } 
                  name = { this.state.persons[2].name } 
                  age = { this.state.persons[2].age }/>
      </div>
    );
  }
}

export default App;
