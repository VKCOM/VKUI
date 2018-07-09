import './Div.css';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Div');

export default function Div ({ className, children, ...restProps }) {
  return <div {...restProps} className={classnames(baseClassNames, className)}>{children}</div>;
}

Div.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};
