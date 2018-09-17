import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('FormLayoutGroup');

const FormLayoutGroup = ({ children, top, bottom, className, ...restProps }) => (
  <div className={classnames(baseClassNames, className)} {...restProps}>{children}</div>
);

FormLayoutGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  top: PropTypes.node,
  bottom: PropTypes.node
};

export default FormLayoutGroup;
