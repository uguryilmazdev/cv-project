import React, { Component } from 'react';
import '../styles/Overview.css';

export default class Overview extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((exp) => {
          return <div key={exp.id}>{exp.dateFrom}</div>;
        })}
      </div>
    );
  }
}
