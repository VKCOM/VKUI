import './Switch.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('Switch');

const Switch = ({ style, className, getRef, ...restProps }) => (
  <label className={classnames(baseClassNames, className)} style={style}>
    <input {...restProps} type="checkbox" className="Switch__self" ref={getRef} />
    <span className="Switch__pseudo" />
  </label>
);

Switch.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  getRef: PropTypes.func
};

export default Switch;
