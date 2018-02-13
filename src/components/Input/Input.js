import './Input.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';
import requestAnimationFrame from '../../lib/requestAnimationFrame';
import {platform, ANDROID} from '../../lib/platform';

const osname = platform();
const baseClassNames = getClassName('Input');

export default class Input extends Component {
  constructor (props) {
    super(props);

    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    } else {
      this.state = {
        value: props.initialValue || ''
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
    initialValue: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    initialValue: '',
    alignment: 'left'
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

  get value () {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  getRef = (element) => {
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
    const { alignment, value } = this.props;
    const modifiers = {
      'Input--left': alignment === 'left',
      'Input--center': alignment === 'center',
      'Input--right': alignment === 'right'
    };

    const customPlaceolder = ['date', 'datetime-local', 'time', 'month'].indexOf(this.props.type) > -1 && this.context.isWebView ? this.props.placeholder : null;

    return (
      <div className={classnames(baseClassNames, modifiers)}>
        <input
          className="Input__el"
          {...removeObjectKeys(this.props, ['onChange', 'initialValue', 'alignment', 'placeholder'])}
          ref={this.getRef}
          value={this.isControlledOutside ? value : this.state.value}
          onChange={this.onChange}
          placeholder={customPlaceolder ? null : this.props.placeholder}
        />
        {osname === ANDROID && <div className="Input-underline" />}
        {customPlaceolder && !this.value && <div className="Input__placeholder">{this.props.placeholder}</div>}
      </div>
    );
  }
}
