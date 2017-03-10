import './Input.css';
import React, { Component, PropTypes } from 'react';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';

const baseClassNames = getClassName('Input');

export default class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.initialValue || ''
    };
  }
  static propTypes = {
    type: PropTypes.oneOf([
      'text', 'password',
      'date', 'datetime-local', 'time', 'month',
      'email', 'number', 'tel', 'url'
    ]),
    initialValue: PropTypes.string,
    onChange: PropTypes.func
  };
  static defaultProps = {
    type: 'text',
    initialValue: ''
  };
  onChange = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render () {
    return (
      <input
        className={baseClassNames}
        {...removeObjectKeys(this.props, ['onChange', 'initialValue'])}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}
