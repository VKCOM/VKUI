import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import './Progress.css';

const baseClassName = getClassName('Progress');

const Progress = ({ value, className, color, ...restProps }) => {
  return (
    <div{...restProps} className={classnames(baseClassName, className)}>
      <div className="Progress__in" style={{ width: `${value}%`, backgroundColor: color }} />
    </div>
  );
};

Progress.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.number
};

Progress.defaultProps = {
  color: '#528bcc',
  value: 0
};

export default Progress;
