import React, { ChangeEvent, ChangeEventHandler, SelectHTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';
import { HasAlign, HasFormLabels, HasFormStatus, HasRef, HasRootRef, OldRef } from '../../types';

export interface SelectProps extends
  SelectHTMLAttributes<HTMLSelectElement>,
  HasRef<HTMLSelectElement>,
  HasRootRef<HTMLLabelElement>,
  HasFormStatus,
  HasFormLabels,
  HasAlign {
  defaultValue?: string;
  placeholder?: string;
}

export interface SelectState {
  value?: string;
  title?: string;
  notSelected?: boolean;
}

export default class Select extends React.Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);
    const state: SelectState = {
      title: '',
      notSelected: false,
    };
    if (typeof props.value !== 'undefined') {
      this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }
    this.state = state;
  }

  isControlledOutside?: boolean;
  selectEl?: HTMLSelectElement;

  onChange: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setTitle();
    if (!this.isControlledOutside) {
      this.setState({ value: e.currentTarget.value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  setTitle: VoidFunction = () => {
    const selectedOption = this.selectEl.options[this.selectEl.selectedIndex];
    selectedOption && this.setState({
      title: selectedOption.text,
      notSelected: selectedOption.value === '' && this.props.hasOwnProperty('placeholder'),
    });
  };

  componentDidUpdate(prevProps: SelectProps) {
    if (prevProps.value !== this.props.value || prevProps.children !== this.props.children) {
      this.setTitle();
    }
  }

  componentDidMount() {
    this.setTitle();
  }

  get value() {
    return this.isControlledOutside ? this.props.value : this.state.value;
  }

  getRef: OldRef<HTMLSelectElement> = (element: HTMLSelectElement) => {
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

  render() {
    const { style, value, defaultValue, onChange, align, status, placeholder, children, className,
      getRef, getRootRef, top, bottom, disabled, ...restProps } = this.props;

    return (
      <FormField
        Component="label"
        className={classNames('Select', {
          ['Select--not-selected']: this.state.notSelected,
          [`Select--align-${align}`]: !!align,
          'Select--disabled': disabled,
        }, className)}
        style={style}
        getRootRef={getRootRef}
        status={status}
      >
        <select
          {...restProps}
          disabled={disabled}
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
