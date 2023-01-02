import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

var person = {
  personName: "Nick",
  personAge: 24
}

ReactDOM.render(
  <Hello
  name={person.personName}
  age={person.personAge} />,
  document.getElementById('root')
)
