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
        descriptionPersonelInfo: props.personelInfo.descriptionPersonelInfo,
      },
      websiteInfo: {
        id: props.websiteInfo.id,
        websiteName: props.websiteInfo.websiteName,
        websiteURL: props.websiteInfo.websiteURL,
      },
    };
  }

  componentDidUpdate(props) {
    if (props.personelInfo !== this.props.personelInfo) {
      this.setState(props);
    }

    if (props.websiteInfo !== this.props.websiteInfo) {
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
        <h2 className="title-input-area">Personel Information</h2>
        <input
          onChange={this.props.handleChangePersonelInfo}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first name"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.firstName}
        />

        <input
          onChange={this.props.handleChangePersonelInfo}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last name"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.lastName}
        />

        <input
          onChange={this.props.handleChangePersonelInfo}
          type="text"
          id="title"
          name="title"
          placeholder="title"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.title}
        />

        <input
          onChange={this.props.handleChangePersonelInfo}
          type="text"
          id="address"
          name="address"
          placeholder="address"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.address}
        />

        <input
          onChange={this.props.handleChangePersonelInfo}
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="phone number"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.phoneNumber}
        />

        <input
          onChange={this.props.handleChangePersonelInfo}
          type="email"
          id="email"
          name="email"
          placeholder="e-mail"
          autoComplete="off"
          className="input-text"
          value={this.props.personelInfo.email}
        />

        <textarea
          onChange={this.props.handleChangePersonelInfo}
          type="text"
          id="descriptionPersonelInfo"
          name="descriptionPersonelInfo"
          placeholder="description"
          autoComplete="off"
          className="input-text text-area"
          value={this.props.personelInfo.descriptionPersonelInfo}
        />
        <hr className="divider" />
        <form onSubmit={this.props.handleSubmit} className="website-form">
          <h2 className="title-input-area">Website and Social Links</h2>
          <div className="website-input-container">
            <input
              onChange={this.props.handleChangeWebsite}
              type="text"
              id="websiteName"
              name="websiteName"
              placeholder="Linkedin"
              autoComplete="off"
              className="input-text"
              value={this.props.websiteInfo.websiteName}
            />
            <input
              onChange={this.props.handleChangeWebsite}
              type="text"
              id="websiteURL"
              name="websiteURL"
              placeholder="linkedin.com/example"
              autoComplete="off"
              className="input-text"
              value={this.props.websiteInfo.websiteURL}
            />
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </section>
    );
  }
}
