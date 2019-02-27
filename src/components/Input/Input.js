import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import FormField from '../FormField/FormField';

const Input = ({ alignment, status, getRef, className, getRootRef, ...restProps }) => {
  return (
    <FormField
      className={classNames('Input', className, {
        [`Input--${alignment}`]: alignment
      })}
      status={status}
      getRootRef={getRootRef}
    >
      <input {...restProps} className="Input__el" ref={getRef} />
    </FormField>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(['default', 'error', 'valid']),
  getRef: PropTypes.func,
  getRootRef: PropTypes.func,
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
