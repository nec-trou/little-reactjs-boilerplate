import React, { Component } from 'react';
import { numberBounds } from './constants';

class PhoneInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const value = event.target.value;
    const formattedNumber = this.formatInput(value, this.state.phoneNumber);
    this.setState({
      phoneNumber: formattedNumber || value
    });
  }

  formatInput(value, prevState) {
    const rawNumber = value.replace(/[^\d]/g, '').replace(/^(\+7|8|7)/, '');

    if (!prevState || value.length > prevState.length) {
      return this.createDisplayValue(rawNumber, numberBounds);
    }
  }

  createDisplayValue(number, numberBounds) {
    const { countryCode, carrier, sub, maxLen } = numberBounds;
    const numLen = number.length;
    const cut = (indexA, indexB) => number.slice(indexA, indexB);

    const carrierIncluded = `+7 (${cut(0, countryCode)})`;
    const subIncluded = `${cut(countryCode)}`;

    if (numLen <= countryCode) {
      return `+7 ${number}`;
    }
    if (numLen === countryCode) {
      return `+7 (${number})}`;
    }
    if (numLen <= carrier) {
      return `${carrierIncluded} ${subIncluded}`;
    }
    if (numLen === carrier) {
      return `${carrierIncluded} ${subIncluded}`;
    }
    if (numLen <= sub) {
      return (
        `${carrierIncluded} ${cut(countryCode, carrier)}` +
        `-${cut(carrier, sub)}`
      );
    }

    return (
      `${carrierIncluded} ${cut(countryCode, carrier)}` +
      `-${cut(carrier, sub)}-${cut(sub, maxLen)}`
    );
  }

  render() {
    return (
      <input
        onChange={this.handleInput}
        value={this.state.phoneNumber}
        className={'phoneInput'}
      />
    );
  }
}

export default PhoneInput;
