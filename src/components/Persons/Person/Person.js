import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[person.js] Inside Constuctor', props);
  }

  componentWillMount() {
    console.log('[person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[person.js] Inside componentDidMount()');
  }

  render () {
       return(
        <WithClass classes={ classes.App }>
          < p onClick={this.props.click} > I 'm a { this.props.name } I am { this.props.age } years old!</p>
          <p>{this.props.children }</p>
          <input type="text" onChange={this.props.changed} value= { this.props.name } />
        </WithClass>
      );
  }
}

export default Person;
