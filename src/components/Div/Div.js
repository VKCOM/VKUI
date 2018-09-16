
import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Div');

export default function Div ({ className, children, getRootRef, ...restProps }) {
  return <div {...restProps} ref={getRootRef} className={classnames(baseClassNames, className)}>{children}</div>;
}

Div.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  getRootRef: PropTypes.func
};
