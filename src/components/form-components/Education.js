import React, { Component } from 'react';
import uniqid from 'uniqid';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        id: uniqid(),
        schoolName: '',
        city: '',
        degree: '',
        dateFrom: '',
        dataTo: '',
      },

      educationList: props.list,
    };
  }

  render() {
    return (
      <form>
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
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="city"
            name="city"
            placeholder="city"
            autoComplete="off"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="degree"
            name="degree"
            placeholder="degree"
            autoComplete="off"
          />
          <input
            onChange={this.props.handleChange}
            type="date"
            id="dateFromEdu"
            name="dateFromEdu"
            placeholder="from"
            autoComplete="off"
          />
          <input
            onChange={this.props.handleChange}
            type="date"
            id="dateToEdu"
            name="dateToEdu"
            placeholder="to"
            autoComplete="off"
          />
        </section>
      </form>
    );
  }
}
