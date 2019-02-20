import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('Input');

const Input = ({ alignment, status, getRef, className, getRootRef, ...restProps }) => (
  <div className={classNames(baseClassName, {
    [`Input--${alignment}`]: alignment,
    [`Input--s-${status}`]: status
  }, className)} ref={getRootRef}>
    <input {...restProps} className="Input__el" ref={getRef} />
    <div className="Input__border" />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['default', 'error', 'verified']),
  getRef: PropTypes.func,
  getRootRef: PropTypes.func,
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
