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
    return (
      <div className="experience-container">
        {this.props.info.experienceList.map((exp) => (
          <div className="exp-child" key={exp.id}>
            <div className="exp-child-left">
              <div className="exp-company">{exp.company}</div>
              <div className="exp-city">{exp.city}</div>
              <div className="exp-date">
                {exp.dateFromExp}
                {' - '}
                {exp.dateToExp}
              </div>
            </div>
            <div className="exp-child-right">
              <div className="exp-title">{exp.position}</div>
              <div className="exp-description">{exp.descriptionExperience}</div>
            </div>
          </div>
        ))}
      </div>
    );
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
