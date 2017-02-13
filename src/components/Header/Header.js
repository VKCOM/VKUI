import './Header.css';
import React, { Component, PropTypes } from 'react';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import classnames from '../../lib/classnames';

const osname = platform();

export default class Header extends Component {
  static propTypes = {
    style: PropTypes.object
  };
  static defaultProps = {
    style: {}
  };
  render() {
    const { style, children } = this.props;
    const classes = classnames('Header', {
      'Header--android': osname === ANDROID,
      'Header--ios': osname === IOS,
    });

    return (
      <div className={classes} style={style}>
        <h1 className="Header__title">{children}</h1>
      </div>
    );
  }
}