import './Icon.css';
import React, { Component, PropTypes } from 'react';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import classnames from '../../lib/classnames';

const osname = platform();

export default class Group extends Component {
  render() {
    const { style, children } = this.props;
    const classes = classnames('Icon', {
      'Icon--android': osname === ANDROID,
      'Icon--ios': osname === IOS,
      'Icon--verbose': !children
    });

    return <div className={classes} style={style}>{children}</div>;
  }
}