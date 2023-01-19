import React, { Component } from 'react';
import '../../styles/Overview.css';

export default class Overview extends Component {
  personelInfoContainer = () => {
    return (
      <div className="overview-header">
        <div className="overview-personel-info">
          <div className="overview-name-title">
            <div className="overview-name">
              {this.props.info.personelInfo.firstName}{' '}
              {this.props.info.personelInfo.lastName}
            </div>
            <div className="overview-title">
              {this.props.info.personelInfo.title}
            </div>
          </div>
          <div className="info-container">
            <div>{this.props.info.personelInfo.address}</div>
            <div>{this.props.info.personelInfo.phoneNumber}</div>
            <div>{this.props.info.personelInfo.email}</div>
          </div>
        </div>
        <div className="personel-info-description">
          <div className="description-info">
            {this.props.info.personelInfo.description}
          </div>
          <div className="website-container">website</div>
        </div>
      </div>
    );
  };

  experienceContainer = () => {
    return <div className="experience-container">experience</div>;
  };

  educationContainer = () => {
    return <div className="education-container">education</div>;
  };

  render() {
    return (
      <div className="overview-container">
        <this.personelInfoContainer />
        <div className="overview-main">
          <this.experienceContainer />
          <this.educationContainer />
        </div>
      </div>
    );
  }
}
