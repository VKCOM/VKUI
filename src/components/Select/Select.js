import './Select.css';
import './Select.new.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
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
    placeholder: PropTypes.string
  };

  static defaultProps = {
    style: {},
    label: '',
    options: null,
    name: '',
    v: 'old'
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

  render () {
    const { style, label } = this.props;

    const options = this.options;

    return (
      <label
        className={classnames(getClassName(this.baseClass), {
          [`${this.baseClass}--not-selected`]: this.value === ''
        })}
        style={style}
      >
        <select
          onChange={this.onChange}
          value={this.value}
          {...removeObjectKeys(this.props, ['onChange', 'label', 'options', 'value', 'defaultValue', 'style', 'className', 'v'])}
        >
          {Array.isArray(options) && options.length && options.map((option, i) => {
            const isString = typeof option === 'string';
            const value = isString ? option : typeof option.value === 'string' ? option.value : option.text;
            const key = !isString && option.id;

            return (
              <option value={value} key={key || `option-${i}`}>
                {isString ? option : option.text}
              </option>
            );
          })}
          {this.props.placeholder && !this.props.options && <option value="">{this.props.placeholder}</option>}
          {this.props.children}
        </select>
        {this.props.v === 'new' && osname === ANDROID && <div className={`${this.baseClass}-underline`} />}
        {this.props.v === 'new' && <Icon24Dropdown />}
      </label>
    );
  }
}
