import './Checkbox.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Checkbox');

export default class Checkbox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: !!props.checked
    };
  }
  static propTypes = {
    style: PropTypes.object,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };
  static defaultProps = {
    style: {},
    checked: false,
    onChange: () => {}
  };
  changeHandler = (e) => {
    this.setState({ checked: e.target.checked });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render () {
    const { style } = this.props;

    return (
      <label className={baseClassNames} style={style}>
        <input
          {...removeObjectKeys(this.props, ['onChange'])}
          type="checkbox"
          className="Checkbox__self"
          checked={this.state.checked}
          onChange={this.changeHandler}
        />
        <span className="Checkbox__pseudo" />
      </label>
    );
  }
}
