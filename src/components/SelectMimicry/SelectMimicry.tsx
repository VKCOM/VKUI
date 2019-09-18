import React, { FunctionComponent } from 'react';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';
import { SelectProps } from '../Select/Select';

export interface SelectMimicryProps extends SelectProps {
  multiline?: boolean;
}

const SelectMimicry: FunctionComponent<Omit<SelectMimicryProps, 'value'>> = ({
  className,
  tabIndex,
  placeholder,
  children,
  alignment,
  status,
  getRootRef,
  multiline,
  disabled,
  ...restProps
}: SelectMimicryProps) => {
  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? null : tabIndex}
      className={classNames('Select', 'Select--mimicry', {
        'Select--not-selected': !children,
        'Select--multiline': multiline,
        'Select--disabled': disabled,
        [`Select--align-${alignment}`]: !!alignment
      }, className)}
      getRootRef={getRootRef}
      status={status}
    >
      <div className="Select__container">
        <div className="Select__title">{children || placeholder}</div>
        <Icon24Dropdown />
      </div>
    </FormField>
  );
};

SelectMimicry.defaultProps = {
  tabIndex: 0
};

export default SelectMimicry;
