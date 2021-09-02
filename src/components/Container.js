import React, { Component } from 'react';
import Panel from './Panel'

class Container extends Component {
  // static defaultProps = {
  //   images: ['https://images.unsplash.com/photo-1527596428171-7885b82c91c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1277&q=80', 'https://images.unsplash.com/photo-1509047319667-c1a8de3000c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80'],
  //   text: [
  //     'your locals only coffee shop', 'fresh cold brew'
  //   ]
  // }
  render() {
    return (
      <div className="container">
        <Panel img={'https://images.unsplash.com/photo-1527596428171-7885b82c91c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1277&q=80'} />
      </div>
    )
  }
};

export default Container;