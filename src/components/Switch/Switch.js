
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassNames = getClassName('Switch');

const Switch = ({ style, className, getRef, getRootRef, ...restProps }) => (
  <label className={classNames(baseClassNames, className)} style={style} ref={getRootRef}>
    <input {...restProps} type="checkbox" className="Switch__self" ref={getRef} />
    <span className="Switch__pseudo" />
  </label>
);

Switch.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  getRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

export default Switch;
