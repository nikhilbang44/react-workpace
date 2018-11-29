import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {
        id: '1',
        name: 'Max',
        age: 28
       },
      {
        id: '2',
        name: 'Manu',
        age: 28
      },
      {
        id: '3',
        name: 'Step',
        age: 28
      }
    ],
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] };
    //    const person = Object.assign({}, this.state.person[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ 
      showPersons: !doesShow 
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  render() {

    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)}
              name = { person.name }
              age = { person.age }
              key = { person.id }
              changed = { (event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
      btnClass = classes.Red;
    }

    let assigendClasses = [];



    if (this.state.persons.length <= 2) {
      assigendClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assigendClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1> Hi, I'm a React APP </h1>
          <p className= {assigendClasses.join(' ')}> This is really working! </p>
          <button className={btnClass} onClick={this.togglePersonsHandler}> Toggle Person</button>
          { persons }
        </div>
    );
  }
}

export default App;

