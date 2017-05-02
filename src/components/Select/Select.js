import './Select.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Select');

export default class Select extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: null
    };
  }
  static propTypes = {
    style: PropTypes.object,
    label: PropTypes.string,
    options: PropTypes.array,
    name: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };
  static defaultProps = {
    style: {},
    label: '',
    options: null,
    name: ''
  };
  changeHandler = (e) => {
    this.setState({ checked: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render () {
    const { style, label, options } = this.props;

    return (
      <label className={baseClassNames} style={style}>
        <select
          className="Select__self"
          onChange={this.changeHandler}
          {...removeObjectKeys(this.props, ['onChange', 'label', 'options'])}
        >
          {Array.isArray(options) && options.length && options.map((option, i) => {
            const isString = typeof option === 'string';
            const value = isString ? option : option.value || option.text;
            const key = !isString && option.id;

            return (
              <option value={value} key={key || `option-${i}`}>
                {isString ? option : option.text}
              </option>
            );
          })}
          {this.props.children}
        </select>
      </label>
    );
  }
}
