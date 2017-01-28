import './Input.css';
import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text', 'password',
      'date', 'datetime-local', 'time', 'month',
      'email', 'number', 'tel', 'url'
    ])
  };
  render() {
    // remove label
    return <input className="Input" {...this.props} />;
  }
}