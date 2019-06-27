import React from 'react';
import PropTypes from 'prop-types';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';
import { HasStyleObject, HasRef, HasChildren, StatusTypes } from '../../types/props';

export interface SelectMimicryProps extends HasStyleObject, HasRef, HasChildren {
  alignment?: 'left' | 'center' | 'top';
  disabled?: boolean;
  multiline?: boolean;
  placeholder?: string;
  status?: StatusTypes;
  tabIndex?: number;
}

const SelectMimicry = ({
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
      className={classNames(
        'Select',
        'Select--mimicry',
        {
          'Select--not-selected': !children,
          'Select--multiline': multiline,
          'Select--disabled': disabled,
          [`Select--align-${alignment}`]: alignment
        },
        className
      )}
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

SelectMimicry.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  tabIndex: PropTypes.number,
  placeholder: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'top']),
  getRootRef: PropTypes.func,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(['default', 'error', 'valid'])
};

SelectMimicry.defaultProps = {
  tabIndex: 0
};

export default SelectMimicry;
