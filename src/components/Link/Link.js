import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import PropTypes from 'prop-types';

const baseClassName = getClassName('Link');

const Link = ({children, className, Component, getRootRef, ...restProps}) => (
  <Component {...restProps} ref={getRootRef} className={classNames(baseClassName, className)}>{children}</Component>
);

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  Component: PropTypes.any,
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

Link.defaultProps = {
  Component: 'a'
};

export default Link;
