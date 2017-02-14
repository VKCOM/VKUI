import './Header.css';
import React, { Component, PropTypes } from 'react';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Header');

export default class Header extends Component {
  static propTypes = {
    style: PropTypes.object
  };
  static defaultProps = {
    style: {}
  };
  render() {
    const { style, children } = this.props;

    return (
      <div className={baseClassNames} style={style}>
        <h1 className="Header__title">{children}</h1>
      </div>
    );
  }
}