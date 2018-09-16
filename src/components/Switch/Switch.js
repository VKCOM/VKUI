
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('Switch');

const Switch = ({ style, className, getRef, getRootRef, ...restProps }) => (
  <label className={classnames(baseClassNames, className)} style={style} ref={getRootRef}>
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
