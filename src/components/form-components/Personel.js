import React, { Component } from 'react';
import '../../styles/InputArea.css';

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

  componentDidUpdate(props) {
    if (props.personelInfo !== this.props.personelInfo) {
      this.setState(props);
    }
  }

  render() {
    return (
      <section
        title="Personel Information"
        direction="column"
        className="input-section personel-info-container"
      >
        <h2>Personel Information</h2>
        <input
          onChange={this.props.handleChange}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first name"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.firstName}
        />

        <input
          onChange={this.props.handleChange}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last name"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.lastName}
        />

        <input
          onChange={this.props.handleChange}
          type="text"
          id="title"
          name="title"
          placeholder="title"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.title}
        />

        <input
          onChange={this.props.handleChange}
          type="text"
          id="address"
          name="address"
          placeholder="address"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.address}
        />

        <input
          onChange={this.props.handleChange}
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="phone number"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.phoneNumber}
        />

        <input
          onChange={this.props.handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="e-mail"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.email}
        />

        <textarea
          onChange={this.props.handleChange}
          type="text"
          id="description"
          name="description"
          placeholder="description"
          autoComplete="off"
          className="input-text text-area"
          value={this.props.personelInfo.description}
        />
      </section>
    );
  }
}
