import './Textarea.css';
import React, { Component, PropTypes } from 'react';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Textarea');

export default class Textarea extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.initialValue || ''
    };
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
    this.setState({ value: e.target.value });
  }
  render () {
    return (
      <textarea
        className={baseClassNames}
        onChange={this.onChange}
        value={this.state.value}
        {...removeObjectKeys(this.props, ['initialValue'])}
      />
    );
  }
}
