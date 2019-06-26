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

  /**
   * Значение `verified` устарело и будет удалено в 3.0.0. Используйте вместо него `valid`
   */
  status: PropTypes.oneOf(['default', 'error', 'verified', 'valid']),
  getRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
