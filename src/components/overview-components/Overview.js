import React, { Component } from 'react';
import '../../styles/Overview.css';
import html2pdf from 'html2pdf.js';

export default class Overview extends Component {
  personelInfoContainer = () => {
    return (
      <div className="overview-header">
        <div className="overview-personel-info">
          <div className="overview-name-title">
            <h1 className="overview-name">
              {this.props.info.personelInfo.firstName}{' '}
              {this.props.info.personelInfo.lastName}
            </h1>
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
            {this.props.info.personelInfo.descriptionPersonelInfo}
          </div>
          <div className="website-container">
            {this.props.info.websiteSocialList.map((site) => (
              <div className="website-child" key={site.id}>
                <div className="website-name">{site.websiteName}</div>
                <div className="website-url">{site.websiteURL}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  experienceContainer = () => {
    return (
      <>
        {' '}
        {this.props.info.experienceList.map((exp) => (
          <div className="exp-edu-child" key={exp.id}>
            <div className="exp-edu-child-left">
              <div className="exp-company">{exp.company}</div>
              <div className="exp-edu-city">{exp.city}</div>
              <div className="exp-date">
                {exp.dateFromExp}
                {' - '}
                {exp.dateToExp}
              </div>
            </div>
            <div className="exp-edu-child-right">
              <div className="exp-title">{exp.position}</div>
              <div className="exp-edu-description">
                {exp.descriptionExperience}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  educationContainer = () => {
    return (
      <>
        {' '}
        {this.props.info.educationList.map((edu) => (
          <div className="exp-edu-child" key={edu.id}>
            <div className="exp-edu-child-left">
              <div className="edu-schoolname">{edu.schoolName}</div>
              <div className="exp-edu-city">{edu.city}</div>
              <div className="edu-date">
                {edu.dateFromEdu}
                {' - '}
                {edu.dateToEdu}
              </div>
            </div>
            <div className="exp-edu-child-right">
              <div className="edu-degree">{edu.degree}</div>
              <div className="exp-edu-description">
                {edu.descriptionEducation}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  printDocument() {
    const container = document.querySelector('.overview-container');
    const opt = {
      margin: 10,
      filename: 'CV.pdf',
      html2canvas: { scale: 2 },
      pagebreak: { mode: ['avoid-all', 'css'] },
    };
    html2pdf().set(opt).from(container).save();
  }

  render() {
    return (
      <>
        <div className="border-container">
          <div className="overview-container">
            <this.personelInfoContainer />
            <div className="overview-main">
              <h2 className="sub-title">WORK EXPERIENCE</h2>
              <this.experienceContainer />
              <h2 className="sub-title">EDUCATION</h2>
              <this.educationContainer />
            </div>
          </div>
        </div>
        <div className="pdf-btn-container">
          <button className="pdf-btn add-btn" onClick={this.printDocument}>
            PDF
          </button>
        </div>
      </>
    );
  }
}
