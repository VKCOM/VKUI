import './Textarea.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Textarea');

export default class Textarea extends Component {
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
    style: PropTypes.object,
    initialValue: PropTypes.string
  };
  static defaultProps = {
    style: {},
    initialValue: ''
  };
  onChange = (e) => {
    if (!this.isControlledOutside) {
      this.setState({ value: e.target.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render () {
    return (
      <textarea
        className={baseClassNames}
        {...removeObjectKeys(this.props, ['initialValue'])}
        value={this.isControlledOutside ? this.props.value : this.state.value}
        onChange={this.onChange}
      />
    );
  }
}
