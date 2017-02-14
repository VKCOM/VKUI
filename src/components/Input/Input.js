import './Input.css';
import React, { Component, PropTypes } from 'react';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Input');

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text', 'password',
      'date', 'datetime-local', 'time', 'month',
      'email', 'number', 'tel', 'url'
    ])
  };
  render() {
    return <input className={baseClassNames} {...this.props} />;
  }
}