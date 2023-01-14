import React, { Component } from 'react';
import uniqid from 'uniqid';
import Personel from './form-components/Personel';
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
      experience: [
        {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          dateFrom: '',
          dataTo: '',
        },
      ],
      education: [
        {
          id: uniqid(),
          schoolName: '',
          city: '',
          degree: '',
          dateFrom: '',
          dataTo: '',
        },
      ],
    };
  }

  handlePersonelInfoChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      personelInfo: {
        ...prevState.personelInfo,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <main>
        <Personel
          personelInfo={this.state.personelInfo}
          handleChange={this.handlePersonelInfoChange}
        />
        <Overview inputs={this.state} />
      </main>
    );
  }
}
