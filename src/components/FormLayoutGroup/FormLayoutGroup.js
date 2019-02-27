import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassNames = getClassName('FormLayoutGroup');

const FormLayoutGroup = ({ children, top, bottom, className, ...restProps }) => (
  <div className={classNames(baseClassNames, className)} {...restProps}>{children}</div>
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
