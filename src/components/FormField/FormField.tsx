import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasRef } from '../../types/props';

const baseClassName = getClassName('FormField');

export interface FormFieldProps extends HasRef {
  TagName?: string;
  children?: React.ReactNode;
  className?: string;
  style?: object;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  status?: 'default' | 'error' | 'valid';
  tabIndex?: number;
}

const FormField = ({ TagName, className, children, status, getRootRef, ...restProps }: FormFieldProps) => {
  return React.createElement(
    TagName,
    {
      ...restProps,
      className: classNames(baseClassName, { [`FormField--s-${status}`]: status !== 'default' }, className),
      ref: getRootRef
    },

    children,
    <div className="FormField__border" />
  );
};

FormField.propTypes = {
  TagName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  top: PropTypes.node,
  bottom: PropTypes.node,
  getRootRef: PropTypes.func,
  status: PropTypes.oneOf(['default', 'error', 'valid'])
};

FormField.defaultProps = {
  status: 'default',
  TagName: 'div'
};

export default FormField;
