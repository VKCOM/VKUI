import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('FormField');

const FormField = ({ TagName, className, children, status, getRootRef, ...restProps }) => {
  return (
    <TagName
      {...restProps}
      className={classNames(baseClassName, {
        [`FormField--s-${status}`]: status !== 'default'
      }, className)}
      ref={getRootRef}
    >
      {children}
      <div className="FormField__border" />
    </TagName>
  );
};

FormField.propTypes = {
  TagName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  top: PropTypes.node,
  bottom: PropTypes.node,
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  status: PropTypes.oneOf(['default', 'error', 'valid'])
};

FormField.defaultProps = {
  status: 'default',
  TagName: 'div'
};

export default FormField;
