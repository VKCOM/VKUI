import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasChildren, StatusTypes } from '../../types/props';

const baseClassNames = getClassName('FormLayoutGroup');

export interface FormLayoutGroupProps extends HasStyleObject, HasChildren {
  bottom?: React.ReactNode;
  status?: StatusTypes;
  top?: React.ReactNode;
}

const FormLayoutGroup = ({ children, top, bottom, className, ...restProps }: FormLayoutGroupProps) => (
  <div className={classNames(baseClassNames, className)} {...restProps}>
    {children}
  </div>
);

FormLayoutGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  top: PropTypes.node,
  bottom: PropTypes.node,
  status: PropTypes.oneOf(['default', 'error', 'valid'])
};

export default FormLayoutGroup;
