import React, { Component, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';
import { HasChildren, HasFormStatus, HasRef, HasRootRef } from '../../types/props';

export interface SelectProps extends
  HTMLAttributes<HTMLSelectElement>,
  HasRef<HTMLSelectElement>,
  HasRootRef<HTMLLabelElement>,
  HasChildren,
  HasFormStatus
{
  value?: string;
  placeholder?: string;
  alignment?: 'left' | 'center' | 'top';
  disabled?: boolean;
}

export interface SelectState {
  value?: string,
  title?: string,
  notSelected?: boolean,
}

export default class Select extends Component<SelectProps, SelectState> {
  constructor (props) {
    super(props);
    const state: SelectState = {
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

  isControlledOutside?: boolean
  selectEl?: HTMLSelectElement

  onChange = (e: React.FormEvent<HTMLSelectElement>) => {
    this.setTitle();
    if (!this.isControlledOutside) {
      this.setState({ value: e.currentTarget.value });
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
    const { style, value, defaultValue, onChange, alignment, status, placeholder, children, className,
      getRef, getRootRef, ...restProps } = this.props;

    return (
      <FormField
        TagName="label"
        className={classNames('Select', {
          [`Select--not-selected`]: this.state.notSelected,
          [`Select--align-${alignment}`]: !!alignment
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
