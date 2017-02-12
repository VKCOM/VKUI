import './Input.css';
import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import { platform, ANDROID, IOS } from '../../lib/platform.js';

const osname = platform();

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text', 'password',
      'date', 'datetime-local', 'time', 'month',
      'email', 'number', 'tel', 'url'
    ])
  };
  render() {
    const modifiers = {
      'Input--android': osname === ANDROID,
      'Input--ios': osname === IOS,
    };

    // remove label
    return <input className={classnames('Input', modifiers)} {...this.props} />;
  }
}