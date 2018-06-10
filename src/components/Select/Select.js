import './Select.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import '@vkontakte/icons';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import {platform, ANDROID} from '../../lib/platform';

const osname = platform();

export default class Select extends Component {
  constructor (props) {
    super(props);
    const state = {
      title: '',
      notSelected: false
    };
    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    } else {
      state.value = this.props.defaultValue || '';
    }
    this.state = state;
  }

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    label: PropTypes.string,
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
    name: '',
    v: 'new'
  };

  get baseClass () { return 'Select'; }

  onChange = (e) => {
    this.setTitle();
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  setTitle = (el = this.selectEl) => {
    const selectedOption = el.options[el.selectedIndex];
    selectedOption && this.setState({
      title: selectedOption.text,
      notSelected: selectedOption.value === '' && this.props.hasOwnProperty('placeholder')
    });
  };

  componentDidUpdate (prevProps) {
    if (prevProps.value !== this.props.value || prevProps.children !== this.props.children) {
      this.setTitle();
    }
  }

  componentDidMount () {
    this.setTitle();
  }

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  getRef = (el) => {
    this.selectEl = el;
    this.props.getRef && this.props.getRef(el);
  };

  render () {
    const { style, label, value, defaultValue, onChange, placeholder, children, className, v, getRef, ...restProps } = this.props;

    return (
      <label
        className={classnames(getClassName(this.baseClass), {
          [`${this.baseClass}--not-selected`]: this.state.notSelected
        }, className)}
        style={style}
      >
        <select
          onChange={this.onChange}
          value={this.value}
          ref={this.getRef}
          {...restProps}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {children}
        </select>
        <div className={`${this.baseClass}__container`}>
          <div className={`${this.baseClass}__title`}>{this.state.title}</div>
          <Icon24Dropdown />
        </div>
        {osname === ANDROID && <div className={`${this.baseClass}-underline`} />}
      </label>
    );
  }
}
