import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasRef } from '../../types/props';

const baseClassName = getClassName('Progress');

export interface ProgressProps extends HasStyleObject, HasRef {
  value?: number;
}

const Progress = ({ value, className, getRootRef, ...restProps }: ProgressProps) => {
  return (
    <div {...restProps} ref={getRootRef} className={classNames(baseClassName, className)}>
      <div className="Progress__bg" />
      <div className="Progress__in" style={{ width: `${value}%` }} />
    </div>
  );
};

Progress.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.number,
  getRootRef: PropTypes.func
};

Progress.defaultProps = {
  value: 0
};

export default Progress;
