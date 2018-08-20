import './Input.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import requestAnimationFrame from '../../lib/requestAnimationFrame';
import {platform, ANDROID} from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('Input');

export default class Input extends Component {
  constructor (props) {
    super(props);

    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    } else {
      this.state = {
        value: props.defaultValue || ''
      };
    }
  }

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
    defaultValue: '',
    status: 'default'
  };

  static contextTypes = {
    isWebView: PropTypes.bool
  };

  onChange = (e) => {
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  get value () { return this.isControlledOutside ? this.props.value : this.state.value; }

  getRef = (element) => {
    this.props.getRef && this.props.getRef(element);
    this.element = element;
  };

  componentDidUpdate (prevProps) {
    if (prevProps.value && this.props.value === '') {
      // Fix iOS extra indent on removing content
      requestAnimationFrame(() => {
        this.element.value = '';
      });
    }
  }

  render () {
    const { onChange, defaultValue, alignment, placeholder, value, status, getRef, className, getRootRef, ...restProps } = this.props;

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
          className="Input__el"
          ref={this.getRef}
          value={this.value}
          onChange={this.onChange}
          placeholder={customPlaceolder ? null : this.props.placeholder}
          {...restProps}
        />
        {osname === ANDROID && <div className="Input-underline" />}
        {customPlaceolder && !this.value && <div className="Input__placeholder">{this.props.placeholder}</div>}
      </div>
    );
  }
}
