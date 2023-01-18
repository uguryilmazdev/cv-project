import React, { Component } from 'react';
import uniqid from 'uniqid';

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        dateFrom: '',
        dataTo: '',
      },

      experienceList: props.list,
    };
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <section
          title="Experience Information"
          direction="column"
          className="input-section experience-container"
        >
          <h2>Experience</h2>
          <input
            onChange={this.props.handleChange}
            type="text"
            id="position"
            name="position"
            placeholder="position"
            autoComplete="off"
          />
          <input
            onChange={this.props.handleChange}
            type="text"
            id="company"
            name="company"
            placeholder="company"
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
            type="date"
            id="dateFromExp"
            name="dateFromExp"
            placeholder="from"
            autoComplete="off"
          />
          <input
            onChange={this.props.handleChange}
            type="date"
            id="dateToExp"
            name="dateToExp"
            placeholder="to"
            autoComplete="off"
          />
          <button type="submit">Add</button>
        </section>
      </form>
    );
  }
}
