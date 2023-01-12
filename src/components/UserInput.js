import React, { Component } from 'react';
import Personel from './form-components/Personel';

export default class UserInput extends Component {
  render() {
    return (
      <div>
        <Personel personelInfo={this.props.inputs.personelInfo} />
      </div>
    );
  }
}
