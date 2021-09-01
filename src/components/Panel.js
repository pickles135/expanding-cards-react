import React, { Component } from 'react';

class Panel extends Component {
  render() {
    let image = this.props.bgImg
    return (
      <div className="panel active">
        <img src={image} />
        <h3>{this.props.text}</h3>
      </div>
    )
  }
};

export default Panel;