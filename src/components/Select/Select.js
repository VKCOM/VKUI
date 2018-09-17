
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import { platform, ANDROID } from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('Select');

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
      state.value = props.defaultValue || '';
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
    placeholder: PropTypes.string,
    getRef: PropTypes.func,
    getRootRef: PropTypes.func,
    alignment: PropTypes.oneOf(['left', 'center', 'top'])
  };

  static defaultProps = {
    alignment: 'left'
  };

  onChange = (e) => {
    this.setTitle();
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  setTitle = () => {
    const selectedOption = this.selectEl.options[this.selectEl.selectedIndex];
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
    const { style, label, value, defaultValue, onChange, alignment, placeholder, children, className,
      getRef, getRootRef, ...restProps } = this.props;

    return (
      <label
        className={classnames(baseClassName, {
          [`Select--not-selected`]: this.state.notSelected,
          [`Select--align-${alignment}`]: alignment
        }, className)}
        style={style}
        ref={getRootRef}
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
        <div className="Select__container">
          <div className="Select__title">{this.state.title}</div>
          <Icon24Dropdown />
        </div>
        {osname === ANDROID && <div className="Select-underline" />}
      </label>
    );
  }
}
