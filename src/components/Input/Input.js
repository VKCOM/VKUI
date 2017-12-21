import './Input.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';
import classnames from '../../lib/classnames';
import requestAnimationFrame from '../../lib/requestAnimationFrame';

const baseClassNames = getClassName('Input');

export default class Input extends Component {
  constructor (props) {
    super(props);

    let state = {
      customPlaceholder: ['date', 'datetime-local', 'time', 'month'].indexOf(this.props.type) >= 0 &&
        typeof this.props.placeholder !== 'undefined' && this.props.placeholder
    };

    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    } else {
      state.value = props.initialValue || '';
    }

    this.state = state;
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
    onChange: PropTypes.func
  };

  static contextTypes = {
    isWebView: PropTypes.bool
  };

  static defaultProps = {
    type: 'text',
    initialValue: '',
    alignment: 'left'
  };

  onChange = (e) => {
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

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

    return (
      <div className={classnames(baseClassNames, modifiers)}>
        <input
          className="Input__control"
          {...removeObjectKeys(this.props, ['onChange', 'initialValue', 'alignment'])}
          ref={this.getRef}
          value={this.isControlledOutside ? value : this.state.value}
          onChange={this.onChange}
        />
        { this.state.customPlaceholder && !this.state.value && !this.props.value && this.context.isWebView && <label className="Input__placeholder" htmlFor="">{ this.state.customPlaceholder }</label> }
      </div>
    );
  }
}
