import React, { Component } from 'react';

class Panel extends Component {
  render() {
    let image = this.props.img;
    return (
      <div className="panel active">
        <img className='img' src={image} />
        <h3>Testing</h3>
      </div>
    )
  }
};

export default Panel;