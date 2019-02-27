import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';

const SelectMimicry = ({ className, placeholder, children, alignment, status, getRootRef, multiline, ...restProps }) => {
  return (
    <FormField
      {...restProps}
      className={classNames('Select', 'Select--mimicry', {
        'Select--not-selected': !children,
        'Select--multiline': multiline,
        [`Select--align-${alignment}`]: alignment
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

SelectMimicry.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  tabIndex: PropTypes.number,
  placeholder: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'top']),
  getRootRef: PropTypes.func,
  multiline: PropTypes.bool,
  status: PropTypes.oneOf(['default', 'error', 'valid'])
};

SelectMimicry.defaultProps = {
  tabIndex: 0
};

export default SelectMimicry;
