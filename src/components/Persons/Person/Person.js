import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[person.js] Inside Constuctor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
          this.inputElement.current.focus();
        }
  }

  focus(){
      this.inputElement.current.focus();
  }

  render () {
       return(
        <Aux>
          < p onClick={this.props.click} > I 'm a { this.props.name } I am { this.props.age } years old!</p>
          <p>{this.props.children }</p>
          <input
            ref= {this.inputElement}
            type="text"
            onChange={this.props.changed}
            value= { this.props.name } />
        </Aux>
      );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person,classes.Person);
