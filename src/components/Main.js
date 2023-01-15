import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/Main.css';
import Personel from './form-components/Personel';
import Experience from './form-components/Experince';
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
        dateFrom: '',
        dataTo: '',
      },
      education: {
        id: uniqid(),
        schoolName: '',
        city: '',
        degree: '',
        dateFrom: '',
        dataTo: '',
      },
      experienceArr: [],
      educationArr: [],
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

  // submit method
  onSubmitExperience = (event) => {
    event.preventDefault();
    this.setState({
      experienceArr: this.state.experienceArr.concat(this.state.experience),
      experience: {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        dateFrom: '',
        dataTo: '',
      },
    });
    console.log(this.state.experienceArr);
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
            experienceArr={this.state.experienceArr}
            handleChange={this.handleChangeExperience}
            handleSubmit={this.onSubmitExperience}
          />
        </div>
        <div className="overview-area">
          <Overview experienceArr={this.state.experienceArr} />
        </div>
      </main>
    );
  }
}
