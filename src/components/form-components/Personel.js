import React, { Component } from 'react';

export default class Personel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personelInfo: {
        firstName: props.personelInfo.firstName,
        lastName: props.personelInfo.lastName,
        title: props.personelInfo.title,
        address: props.personelInfo.address,
        phoneNumber: props.personelInfo.phoneNumber,
        email: props.personelInfo.email,
        description: props.personelInfo.description,
      },
    };
  }

  render() {
    return (
      <section title="Personel Information" direction="column">
        <input
          onChange={this.props.handleChange}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first name"
          autoComplete="off"
        />

        <input
          onChange={this.props.handleChange}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last name"
          autoComplete="off"
        />

        <input
          onChange={this.props.handleChange}
          type="text"
          id="title"
          name="title"
          placeholder="title"
          autoComplete="off"
        />

        <input
          onChange={this.props.handleChange}
          type="text"
          id="address"
          name="address"
          placeholder="address"
          autoComplete="off"
        />

        <input
          onChange={this.props.handleChange}
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="phone number"
          autoComplete="off"
        />

        <input
          onChange={this.props.handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="e-mail"
          autoComplete="off"
        />

        <textarea
          onChange={this.props.handleChange}
          type="text"
          id="description"
          name="description"
          placeholder="description"
          autoComplete="off"
        />
      </section>
    );
  }
}
