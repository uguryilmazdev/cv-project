import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/Main.css';
import Personel from './form-components/Personel';
import Experience from './form-components/Experince';
import Education from './form-components/Education';
import Overview from './overview-components/Overview';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personelInfo: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: '',
        descriptionPersonelInfo: '',
      },
      websiteInfo: {
        id: uniqid(),
        websiteName: '',
        websiteURL: '',
      },
      experience: {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        descriptionExperience: '',
        dateFromExp: '',
        dateToExp: '',
      },
      education: {
        id: uniqid(),
        schoolName: '',
        city: '',
        degree: '',
        descriptionEducation: '',
        dateFromEdu: '',
        dateToEdu: '',
      },

      websiteSocialList: [],
      experienceList: [],
      educationList: [],
    };
  }

  // handleChange methods
  handleChangePersonelInfo = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      personelInfo: {
        ...prevState.personelInfo,
        [name]: value,
      },
    }));
  };

  handleChangeWebsite = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      websiteInfo: {
        ...prevState.websiteInfo,
        [name]: value,
      },
    }));
  };

  handleChangeExperience = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [name]: value,
      },
    }));
  };

  handleChangeEducation = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  };

  // submit method
  onSubmitWebsite = (event) => {
    event.preventDefault();
    this.setState({
      websiteSocialList: this.state.websiteSocialList.concat(
        this.state.websiteInfo
      ),
      websiteInfo: {
        id: '',
        websiteName: '',
        websiteURL: '',
      },
    });
  };

  onSubmitExperience = (event) => {
    event.preventDefault();
    this.setState({
      experienceList: this.state.experienceList.concat(this.state.experience),
      experience: {
        id: '',
        position: '',
        company: '',
        city: '',
        descriptionExperience: '',
        dateFromExp: '',
        dateToExp: '',
      },
    });
  };

  onSubmitEducation = (event) => {
    event.preventDefault();
    this.setState({
      educationList: this.state.educationList.concat(this.state.education),
      education: {
        id: '',
        schoolName: '',
        city: '',
        degree: '',
        descriptionEducation: '',
        dateFromEdu: '',
        dateToEdu: '',
      },
    });
  };

  render() {
    return (
      <main>
        <div className="input-area">
          <Personel
            personelInfo={this.state.personelInfo}
            websiteInfo={this.state.websiteInfo}
            handleChangePersonelInfo={this.handleChangePersonelInfo}
            handleChangeWebsite={this.handleChangeWebsite}
            handleSubmit={this.onSubmitWebsite}
          />
          <Experience
            experience={this.state.experience}
            list={this.state.experienceList}
            handleChange={this.handleChangeExperience}
            handleSubmit={this.onSubmitExperience}
          />
          <Education
            education={this.state.education}
            list={this.state.educationList}
            handleChange={this.handleChangeEducation}
            handleSubmit={this.onSubmitEducation}
          />
        </div>
        <div className="overview-area">
          <Overview info={this.state} />
        </div>
      </main>
    );
  }
}
