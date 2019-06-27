import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';
import { HasStyleObject, HasRef, HasChildren, StatusTypes } from '../../types/props';

export interface SelectProps extends HasStyleObject, HasRef, HasChildren {
  alignment?: 'left' | 'center' | 'top';
  defaultValue?: string;
  getRef?: (instance: HTMLSelectElement) => void;
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  status?: StatusTypes;
  value?: string;
}

export default class Select extends Component<SelectProps> {
  selectEl: HTMLSelectElement;

  isControlledOutside = typeof this.props.value !== 'undefined';

  state = {
    title: '',
    notSelected: false,
    value: typeof this.props.value !== 'undefined' ? undefined : this.props.defaultValue || ''
  };

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
    alignment: PropTypes.oneOf(['left', 'center', 'top']),
    status: PropTypes.oneOf(['default', 'error', 'valid'])
  };

  static defaultProps = {
    alignment: 'left'
  };

  onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    selectedOption &&
      this.setState({
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

  getRef = (el: HTMLSelectElement) => {
    this.selectEl = el;
    this.props.getRef && this.props.getRef(el);
  };

  render () {
    const {
      style,
      label,
      value,
      defaultValue,
      onChange,
      alignment,
      status,
      placeholder,
      children,
      className,
      getRef,
      getRootRef,
      ...restProps
    } = this.props;

    return (
      <FormField
        TagName="label"
        className={classNames(
          'Select',
          {
            [`Select--not-selected`]: this.state.notSelected,
            [`Select--align-${alignment}`]: alignment
          },
          className
        )}
        style={style}
        getRootRef={getRootRef}
        status={status}
      >
        <select {...restProps} className="Select__el" onChange={this.onChange} value={this.value} ref={this.getRef}>
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
