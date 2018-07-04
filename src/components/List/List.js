import './List.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('List');

export default class List extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string
  };
  static defaultProps = {
    style: {},
    children: ''
  };
  render () {
    const { style, className, children } = this.props;

    return (
      <div className={classnames(baseClassNames, className)} style={style}>
        {children}
      </div>
    );
  }
}
