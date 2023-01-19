import React, { Component } from 'react';
import '../../styles/Overview.css';

export default class Overview extends Component {
  render() {
    return (
      <div className="overview-container">
        <div className="overview-header">
          <div className="personel-info-container">
            <div className="name-title-container">name title</div>
            <div className="info-container">info container</div>
          </div>
          <div className="personel-info-description">
            <div className="description">description</div>
            <div className="website-container">website</div>
          </div>
        </div>
        <div className="overview-main">
          <div className="experience-container">experience</div>
          <div className="education-container">education</div>
        </div>
      </div>
    );
  }
}
