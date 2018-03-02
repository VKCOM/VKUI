import './Select.css';
import './Select.new.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import Icon24Dropdown from '../../../dist/icons/24/dropdown';

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
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]),
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
    if (!this.props.options) return this.props.options;
    return this.props.placeholder ? [{ text: this.props.placeholder, value: '' }, ...this.props.options] : this.props.options;
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
          {...removeObjectKeys(this.props, ['onChange', 'label', 'options', 'value', 'defaultValue', 'style', 'className', 'v'])}
          value={this.value}
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
        {this.props.v === 'new' && <Icon24Dropdown />}
      </label>
    );
  }
}
