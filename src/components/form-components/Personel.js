import React, { Component } from 'react';

export default class Personel extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name } = e.target;

    this.setState({
      personelInfo: {
        [name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <section title="Personel Information" direction="column">
        <input
          onChange={this.handleChange}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first name"
          autoComplete="off"
        />

        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last name"
          autoComplete="off"
        />

        <input
          type="text"
          id="title"
          name="title"
          placeholder="title"
          autoComplete="off"
        />

        <input
          type="text"
          id="address"
          name="address"
          placeholder="address"
          autoComplete="off"
        />

        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="phone number"
          autoComplete="off"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="e-mail"
          autoComplete="off"
        />

        <textarea
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
