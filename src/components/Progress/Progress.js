import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import './Progress.css';

const baseClassName = getClassName('Progress');

const Progress = ({ value, className, color, getRootRef, ...restProps }) => {
  return (
    <div {...restProps} ref={getRootRef} className={classnames(baseClassName, className)}>
      <div className="Progress__in" style={{ width: `${value}%`, backgroundColor: color }} />
    </div>
  );
};

Progress.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.number,
  getRootRef: PropTypes.func
};

Progress.defaultProps = {
  color: '#528bcc',
  value: 0
};

export default Progress;
