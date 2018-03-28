import './Switch.css';
import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('Switch');

const Switch = ({ style, className, ...restProps }) => (
  <label className={classnames(baseClassNames, className)} style={style}>
    <input type="checkbox" className="Switch__self" {...restProps} />
    <span className="Switch__pseudo" />
  </label>
);

Switch.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default Switch;
