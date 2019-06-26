
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';

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
    getRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    getRootRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    alignment: PropTypes.oneOf(['left', 'center', 'top']),
    status: PropTypes.oneOf(['default', 'error', 'valid'])
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

  getRef = (element) => {
    this.selectEl = element;

    const getRef = this.props.getRef;
    if (getRef) {
      if (typeof getRef === 'function') {
        getRef(element);
      } else {
        getRef.current = element;
      }
    }
  };

  render () {
    const { style, label, value, defaultValue, onChange, alignment, status, placeholder, children, className,
      getRef, getRootRef, ...restProps } = this.props;

    return (
      <FormField
        TagName="label"
        className={classNames('Select', {
          [`Select--not-selected`]: this.state.notSelected,
          [`Select--align-${alignment}`]: alignment
        }, className)}
        style={style}
        getRootRef={getRootRef}
        status={status}
      >
        <select
          {...restProps}
          className="Select__el"
          onChange={this.onChange}
          value={this.value}
          ref={this.getRef}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {children}
        </select>
        <div className="Select__container">
          <div className="Select__title">{this.state.title}</div>
          <Icon24Dropdown />
        </div>
      </FormField>
    );
  }
}
