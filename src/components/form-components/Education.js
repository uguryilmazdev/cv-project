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
          <h2>Education</h2>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="schoolName"
            name="schoolName"
            placeholder="school name"
            autoComplete="off"
            value={this.props.education.schoolName}
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="city"
            name="city"
            placeholder="city"
            autoComplete="off"
            value={this.props.education.city}
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="degree"
            name="degree"
            placeholder="degree"
            autoComplete="off"
            value={this.props.education.degree}
          />
          <input
            onChange={this.props.handleChange}
            type="date"
            id="dateFromEdu"
            name="dateFromEdu"
            placeholder="from"
            autoComplete="off"
            value={this.props.education.dateFromEdu}
          />
          <input
            onChange={this.props.handleChange}
            type="date"
            id="dateToEdu"
            name="dateToEdu"
            placeholder="to"
            autoComplete="off"
            value={this.props.education.dateToEdu}
          />
          <button type="submit">Add</button>
        </section>
      </form>
    );
  }
}
