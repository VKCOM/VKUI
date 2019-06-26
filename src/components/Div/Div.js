
import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Div');

export default function Div ({ className, children, getRootRef, ...restProps }) {
  return <div {...restProps} ref={getRootRef} className={classNames(baseClassNames, className)}>{children}</div>;
}

Div.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};
