import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';

const baseClassName = getClassName('Link');

const Link = ({children, className, Component, getRootRef, ...restProps}) => (
  <Component {...restProps} ref={getRootRef} className={classnames(baseClassName, className)}>{children}</Component>
);

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  Component: PropTypes.any,
  getRootRef: PropTypes.func
};

Link.defaultProps = {
  Component: 'a'
};

export default Link;
