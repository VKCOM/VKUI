import './Icon.css';
import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Icon');

export default class Icon extends Component {
  static propTypes = {
    style: PropTypes.object
  };
  static defaultProps = {
    style: {}
  };
  render() {
    const { style, children } = this.props;
    const classes = classnames(baseClassNames, {
      'Icon--verbose': !children
    });

    return <div className={classes} style={style}>{children}</div>;
  }
}