import React, { Component } from 'react';
import uniqid from 'uniqid';
import UserInput from './UserInput';

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

  render() {
    return (
      <main>
        <UserInput inputs={this.state} />
      </main>
    );
  }
}
