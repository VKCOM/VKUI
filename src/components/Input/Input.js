
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import {platform, ANDROID} from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('Input');

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text', 'password',
      'date', 'datetime-local', 'time', 'month',
      'email', 'number', 'tel', 'url'
    ]),
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    status: PropTypes.oneOf(['default', 'error', 'verified']),
    getRef: PropTypes.func,
    getRootRef: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    alignment: 'left',
    status: 'default'
  };

  static contextTypes = {
    isWebView: PropTypes.bool
  };

  render () {
    const { alignment, placeholder, status, getRef, className, getRootRef, ...restProps } = this.props;

    const modifiers = {
      'Input--left': alignment === 'left',
      'Input--center': alignment === 'center',
      'Input--right': alignment === 'right',
      [`Input--s-${this.props.status}`]: true
    };

    const customPlaceolder = ['date', 'datetime-local', 'time', 'month'].indexOf(this.props.type) > -1 && this.context.isWebView ? this.props.placeholder : null;

    return (
      <div className={classnames(baseClassName, modifiers, className)} ref={getRootRef}>
        <input
          {...restProps}
          className="Input__el"
          ref={getRef}
          placeholder={customPlaceolder ? null : this.props.placeholder}
        />
        {osname === ANDROID && <div className="Input-underline" />}
        {customPlaceolder && !this.value && <div className="Input__placeholder">{this.props.placeholder}</div>}
      </div>
    );
  }
}
