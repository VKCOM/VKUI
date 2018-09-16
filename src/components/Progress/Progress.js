import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';

const baseClassName = getClassName('Progress');

const Progress = ({ value, className, getRootRef, ...restProps }) => {
  return (
    <div {...restProps} ref={getRootRef} className={classnames(baseClassName, className)}>
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
