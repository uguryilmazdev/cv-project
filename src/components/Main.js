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

      experienceList: [],
      educationList: [],
    };
  }

  // handleChange methods
  handleChangePersonelInfo = (event) => {
    this.setState({
      personelInfo: {
        [event.target.name]: event.target.value,
      },
    });
  };

  handleChangeExperience = (event) => {
    this.setState({
      experience: {
        [event.target.name]: event.target.value,
      },
    });
  };

  // submit method
  onSubmitExperience = (event) => {
    event.preventDefault();
    this.setState({
      experienceList: this.state.experienceList.concat(this.state.experience),
      experience: {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        dateFrom: '',
        dataTo: '',
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
            list={this.state.experienceList}
            handleChange={this.handleChangeExperience}
            handleSubmit={this.onSubmitExperience}
          />
          <Education list={this.state.educationList} />
        </div>
        <div className="overview-area">
          <Overview list={this.state.experienceList} />
        </div>
      </main>
    );
  }
}
