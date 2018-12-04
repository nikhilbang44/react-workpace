import React, { Component } from 'react';
import classes from './Person.css';
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
        <div className= {classes.Person}>
          < p onClick={this.props.click} > I 'm a { this.props.name } I am { this.props.age } years old!</p>
          <p>{this.props.children }</p>
          <input type="text" onChange={this.props.changed} value= { this.props.name } />
        </div>
      );
  }
}

export default Person;
