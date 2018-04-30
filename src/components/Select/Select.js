import './Select.css';
import './Select.new.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import Icon24Dropdown from '../../../dist/icons/24/dropdown';
import {platform, ANDROID} from '../../lib/platform';

const osname = platform();

export default class Select extends Component {

  constructor (props) {
    super(props);
    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    } else {
      this.state = {
        value: this.props.defaultValue || ''
      };
    }
  }

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    children: PropTypes.node,
    v: PropTypes.oneOf(['old', 'new']),
    placeholder: PropTypes.string,
    getRef: PropTypes.func
  };

  static defaultProps = {
    style: {},
    label: '',
    options: null,
    name: '',
    v: 'new'
  };

  get baseClass () { return this.props.v === 'old' ? 'Select' : 'SelectNew'; }

  onChange = (e) => {
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  get options () {
    const { options, placeholder } = this.props;
    if (!options) return options;
    return placeholder ? [{ text: placeholder, value: '' }, ...options] : options;
  }

  getRef = (el) => {
    this.props.getRef && this.props.getRef(el);
  };

  render () {
    const { style, label, onChange, options, value, defaultValue, placeholder, children, className, v, getRef, ...restProps } = this.props;

    return (
      <label
        className={classnames(getClassName(this.baseClass), {
          [`${this.baseClass}--not-selected`]: placeholder && this.value === ''
        }, className)}
        style={style}
      >
        <select
          onChange={this.onChange}
          value={this.value}
          ref={this.getRef}
          {...restProps}
        >
          {Array.isArray(this.options) && this.options.length && this.options.map((option, i) => {
            const isString = typeof option === 'string';
            const value = isString ? option : typeof option.value === 'string' ? option.value : option.text;
            const key = !isString && option.id;

            return (
              <option value={value} key={key || `option-${i}`}>
                {isString ? option : option.text}
              </option>
            );
          })}
          {placeholder && !this.options && <option value="">{placeholder}</option>}
          {children}
        </select>
        {v === 'new' && osname === ANDROID && <div className={`${this.baseClass}-underline`} />}
        {v === 'new' && <Icon24Dropdown />}
      </label>
    );
  }
}
