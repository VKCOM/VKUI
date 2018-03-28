import './Switch.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('Switch');

export default class Switch extends Component {

  static propTypes = {
    style: PropTypes.object,
    onChange: PropTypes.func,
    className: PropTypes.string
  };

  render () {
    const { style, className, ...restProps } = this.props;

    return (
      <label className={classnames(baseClassNames, className)} style={style}>
        <input
          type="checkbox"
          className="Switch__self"
          {...restProps}
        />
        <span className="Switch__pseudo" />
      </label>
    );
  }
}
