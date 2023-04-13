import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        id: props.education.id,
        schoolName: props.education.schoolName,
        city: props.education.city,
        degree: props.education.degree,
        descriptionEducation: props.education.descriptionEducation,
        dateFromEdu: props.education.dateFromEdu,
        dateToEdu: props.education.dateToEdu,
      },

      educationList: props.list,
    };
  }

  componentDidUpdate(props) {
    if (props.education !== this.props.education) {
      this.setState(props);
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <section
          title="Education Information"
          direction="column"
          className="input-section education-container"
        >
          <hr className="divider" />
          <h2 className="title-input-area">Education</h2>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="schoolName"
            name="schoolName"
            placeholder="school name"
            autoComplete="off"
            required
            value={this.props.education.schoolName}
            className="input-text"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="city"
            name="city"
            placeholder="city"
            autoComplete="off"
            required
            value={this.props.education.city}
            className="input-text"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="degree"
            name="degree"
            placeholder="degree"
            autoComplete="off"
            required
            value={this.props.education.degree}
            className="input-text"
          />
          <textarea
            onChange={this.props.handleChange}
            type="text"
            id="descriptionEducation"
            name="descriptionEducation"
            placeholder="description"
            autoComplete="off"
            required
            value={this.props.education.descriptionEducation}
            className="input-text text-area"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="dateFromEdu"
            name="dateFromEdu"
            placeholder="from"
            autoComplete="off"
            required
            value={this.props.education.dateFromEdu}
            className="input-text"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="dateToEdu"
            name="dateToEdu"
            placeholder="to"
            autoComplete="off"
            required
            value={this.props.education.dateToEdu}
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
