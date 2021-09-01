import React, { Component } from 'react';

class Panel extends Component {
  render() {
    let backgroundImage = {
      backgroundImage: `url(${this.props.bgImg})`
    }
    return (
      <div className="panel active">
        <div style={backgroundImage}>
          {this.props.text}
        </div>
      </div>
    )
  }
};

export default Panel;