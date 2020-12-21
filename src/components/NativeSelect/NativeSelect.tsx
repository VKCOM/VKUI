import React, { ChangeEvent, ChangeEventHandler, RefCallback, SelectHTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import Icon20Dropdown from '@vkontakte/icons/dist/20/dropdown';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import withAdaptivity, { AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';
import { setRef } from '../../lib/utils';
import { getClassName, HasPlatform } from '../..';
import withPlatform from '../../hoc/withPlatform';

export interface NativeSelectProps extends
  SelectHTMLAttributes<HTMLSelectElement>,
  HasRef<HTMLSelectElement>,
  HasRootRef<HTMLLabelElement>,
  HasAlign,
  AdaptivityProps,
  HasPlatform {
  defaultValue?: string;
  placeholder?: string;
}

export interface SelectState {
  value?: string;
  title?: string;
  notSelected?: boolean;
}

class NativeSelect extends React.Component<NativeSelectProps, SelectState> {
  constructor(props: NativeSelectProps) {
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

  componentDidUpdate(prevProps: NativeSelectProps) {
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

  getRef: RefCallback<HTMLSelectElement> = (element) => {
    this.selectEl = element;
    setRef(element, this.props.getRef);
  };

  render() {
    const { style, value, defaultValue, onChange, align, placeholder, children, className,
      getRef, getRootRef, disabled, sizeX, sizeY, platform, ...restProps } = this.props;

    return (
      <FormField
        Component="label"
        className={classNames(getClassName('Select', platform), {
          ['Select--not-selected']: this.state.notSelected,
          [`Select--align-${align}`]: !!align,
          [`Select--sizeX--${sizeX}`]: !!sizeX,
          [`Select--sizeY--${sizeY}`]: !!sizeY,
          'Select--disabled': disabled,
        }, className)}
        style={style}
        getRootRef={getRootRef}
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
          {sizeY === SizeType.COMPACT ? <Icon20Dropdown /> : <Icon24Dropdown />}
        </div>
      </FormField>
    );
  }
}

export default withPlatform(withAdaptivity(NativeSelect, {
  sizeX: true,
  sizeY: true,
}));
