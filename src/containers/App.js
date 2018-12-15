import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      persons: [{
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
    console.log('[App.js] Inside Constuctor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

// shouldComponentUpdate(nextProps, nextState) {
//   console.log('[update App.js] Inside shouldComponentUpdate', nextProps, nextState);
//   return nextState.persons !== this.state.persons ||
//          nextState.showPersons !== this.state.showPersons;
// }

componentWillUpdate(nextProps, nextState) {
  console.log('[update App.js] Inside componentWillUpdate', nextProps, nextState);
}

componentDidUpdate() {
  console.log('[update App.js] Inside componentDidUpdate');
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
    console.log('[App.js] Inside render')
    let persons = null;
    if ( this.state.showPersons) {
      persons = <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>;
    }
    return (
        <WithClass classes={ classes.App }>
          <button onClick={() => { this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit  appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
          />
          { persons }
        </WithClass>
    );
  }
}

export default App;

