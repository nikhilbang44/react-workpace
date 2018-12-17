import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[persons.js] Inside Constuctor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps( nextProps ){
    console.log('Update Persons.js Inside componentWillReceiveProps', nextProps );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons ||
           nextProps.changed !== this.props.changed ||
           nextProps.clicked !== this.props.clicked;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[update Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[update Persons.js] Inside componentDidUpdate');
  }

  render () {
     return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name = { person.name }
        position = { index }
        age = { person.age }
        ref = { this.lastPersonRef }
        key={ person.id }
        changed = { (event) => this.props.changed(event, person.id)}
        />
      });
  }
}

export default Persons;

