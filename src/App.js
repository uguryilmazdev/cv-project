import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
