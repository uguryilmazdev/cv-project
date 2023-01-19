import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/Main.css';
import Personel from './form-components/Personel';
import Experience from './form-components/Experince';
import Education from './form-components/Education';
import Overview from './Overview';

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
        description: '',
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
            handleChange={this.handleChangePersonelInfo}
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
          <Overview
            list={this.state.experienceList}
            personelInfo={this.state.personelInfo}
          />
        </div>
      </main>
    );
  }
}
