import React, { Component } from 'react';
import Panel from './Panel'

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h1>Here is a container component</h1>
        <Panel />
      </div>
    )
  }
};

export default Container;