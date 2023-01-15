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
        dateFrom: props.experience.dateFrom,
        dataTo: props.experience.dateTo,
      },

      experienceArr: props.experienceArr,
    };
  }

  // submit button ekle
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
            value={this.state.position}
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
            id="dateFrom"
            name="dateFrom"
            placeholder="from"
            autoComplete="off"
          />
          <input
            onChange={this.props.handleChange}
            type="date"
            id="dateTo"
            name="dateTo"
            placeholder="to"
            autoComplete="off"
          />
          <button type="submit">Add</button>
        </section>
      </form>
    );
  }
}
