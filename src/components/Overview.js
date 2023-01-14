import React, { Component } from 'react';
import '../styles/Overview.css';

export default class Overview extends Component {
  render() {
    return (
      <div id="overview">{this.props.inputs.personelInfo.description}</div>
    );
  }
}
