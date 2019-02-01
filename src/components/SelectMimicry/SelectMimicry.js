import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';

const baseClassName = getClassName('Select');

const SelectMimicry = ({ className, placeholder, children, alignment, getRootRef, multiline, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={classNames(baseClassName, 'Select--mimicry', {
        'Select--not-selected': !children,
        'Select--multiline': multiline,
        [`Select--align-${alignment}`]: alignment
      }, className)}
      ref={getRootRef}
    >
      <div className="Select__container">
        <div className="Select__title">{children || placeholder}</div>
        <Icon24Dropdown />
      </div>
      <div className="Select__border" />
    </div>
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
  multiline: PropTypes.bool
};

SelectMimicry.defaultProps = {
  tabIndex: 0
};

export default SelectMimicry;
