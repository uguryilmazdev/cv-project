import React, { Component } from 'react';
import '../styles/Header.css';
import githubImage from '../images/githubImage.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <this.headerTitle />
        <this.headerItemsContainer>
          <this.githubLink />
        </this.headerItemsContainer>
      </header>
    );
  }

  headerTitle() {
    return <h1 className="header-title">CV Maker</h1>;
  }

  headerItemsContainer(props) {
    return <div className="header-items-container">{props.children}</div>;
  }

  githubLink() {
    return (
      <a
        href="https://github.com/askalamentor"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={githubImage}
          className="githublink"
          alt="link to github page"
        />
      </a>
    );
  }
}
