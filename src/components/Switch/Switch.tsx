import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasRef } from '../../types/props';

const baseClassNames = getClassName('Switch');

export interface SwitchProps extends HasStyleObject, HasRef {
  getRef?: (instance: HTMLInputElement) => void;
}

const Switch = ({ style, className, getRef, getRootRef, ...restProps }: SwitchProps) => (
  <label className={classNames(baseClassNames, className)} style={style} ref={getRootRef}>
    <input {...restProps} type="checkbox" className="Switch__self" ref={getRef} />
    <span className="Switch__pseudo" />
  </label>
);

Switch.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  getRef: PropTypes.func,
  getRootRef: PropTypes.func
};

export default Switch;
