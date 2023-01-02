// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // What should the component render?
  render () {

    // Make sure to return some UI.
    return (
      <div>
        <h1>Hello World!</h1>
        <p>test</p>
      </div>
    )
  }
}

export default Hello
