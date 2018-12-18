import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    let assigendClasses = [];
    let btnClass = classes.Button;
    if(props.showPersons) {
      btnClass = [classes.Button, classes.Red].join('');
    }


    if (props.persons.length <= 2) {
      assigendClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assigendClasses.push(classes.bold);
    }

    return (
      <Aux>
        <div>
            <h1>{ props.appTitle } </h1>
            <p className= {assigendClasses.join(' ')}> This is really working! </p>
            <button className={btnClass} onClick={props.clicked}> Toggle Person</button>
            <button onClick={props.login}> Log in </button>
        </div>
      </Aux>

    );
};

export default cockpit;
