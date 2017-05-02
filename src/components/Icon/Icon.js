import './Icon.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Icon');

export default class Icon extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node
  };
  static defaultProps = {
    style: {},
    children: ''
  };
  render () {
    const { style, children } = this.props;
    const classes = classnames(baseClassNames, {
      'Icon--verbose': !children
    });

    return <div className={classes} style={style}>{children}</div>;
  }
}
