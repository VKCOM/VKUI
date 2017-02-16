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
      <header className={baseClassNames} style={style}>
        <div className="Header__in">
          <h1 className="Header__title">{children}</h1>
        </div>
      </header>
    );
  }
}