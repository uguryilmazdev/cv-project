import React, { Component } from 'react';

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        id: props.experience.id,
        position: props.experience.position,
        company: props.experience.company,
        city: props.experience.city,
        descriptionExperience: props.experience.descriptionExperience,
        dateFromExp: props.experience.dateFromExp,
        dateToExp: props.experience.dateToExp,
      },

      experienceList: props.list,
    };
  }

  componentDidUpdate(props) {
    if (props.experience !== this.props.experience) {
      this.setState(props);
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <section
          title="Experience Information"
          direction="column"
          className="input-section experience-container"
        >
          <hr className="divider" />
          <h2 className="title-input-area">Experience</h2>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="position"
            name="position"
            placeholder="position"
            autoComplete="off"
            value={this.props.experience.position}
            className="input-text"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="company"
            name="company"
            placeholder="company"
            autoComplete="off"
            value={this.props.experience.company}
            className="input-text"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="city"
            name="city"
            placeholder="city"
            autoComplete="off"
            value={this.props.experience.city}
            className="input-text"
          />
          <textarea
            onChange={this.props.handleChange}
            type="text"
            id="descriptionExperience"
            name="descriptionExperience"
            placeholder="description"
            autoComplete="off"
            value={this.props.experience.descriptionExperience}
            className="input-text text-area"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="dateFromExp"
            name="dateFromExp"
            placeholder="from"
            autoComplete="off"
            value={this.props.experience.dateFromExp}
            className="input-text"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="dateToExp"
            name="dateToExp"
            placeholder="to"
            autoComplete="off"
            value={this.props.experience.dateToExp}
            className="input-text"
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </section>
      </form>
    );
  }
}
