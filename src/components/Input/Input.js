import './Input.css';
import './Input.new.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import requestAnimationFrame from '../../lib/requestAnimationFrame';
import {platform, ANDROID} from '../../lib/platform';

const osname = platform();

export default class Input extends Component {
  constructor (props) {
    super(props);

    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    } else {
      this.state = {
        value: props.defaultValue || props.initialValue || ''
      };
    }
  }

  get baseClass () { return this.props.v === 'old' ? 'Input' : 'InputNew'; }

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
    v: PropTypes.oneOf(['old', 'new']),
    status: PropTypes.oneOf(['default', 'error', 'verified']),
    getRef: PropTypes.func,
    className: PropTypes.string,

    /**
     * @deprecated since v1.5.0 Use defaultValue prop instead
     */
    initialValue: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    alignment: 'left',
    v: 'old',
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
    const { onChange, initialValue, defaultValue, alignment, placeholder, v, value, status, getRef, className, ...restProps } = this.props;

    const modifiers = {
      [`${this.baseClass}--left`]: alignment === 'left',
      [`${this.baseClass}--center`]: alignment === 'center',
      [`${this.baseClass}--right`]: alignment === 'right',
      [`${this.baseClass}--s-${this.props.status}`]: true
    };

    const customPlaceolder = ['date', 'datetime-local', 'time', 'month'].indexOf(this.props.type) > -1 && this.context.isWebView ? this.props.placeholder : null;

    return (
      <div className={classnames(getClassName(this.baseClass), modifiers, className)}>
        <input
          style={{ transition: 'transform ' }}
          className={`${this.baseClass}__el`}
          ref={this.getRef}
          value={this.value}
          onChange={this.onChange}
          placeholder={customPlaceolder ? null : this.props.placeholder}
          {...restProps}
        />
        {osname === ANDROID && <div className={`${this.baseClass}-underline`} />}
        {customPlaceolder && !this.value && <div className={`${this.baseClass}__placeholder`}>{this.props.placeholder}</div>}
      </div>
    );
  }
}
