import './Div.css';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Div');

export default function Div ({ style, className, children, ...restProps }) {
  return (
    <div
      className={classnames(baseClassNames, className)}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  );
}

Div.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};
