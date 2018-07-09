import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import './Link.css';

const baseClassName = getClassName('Link');

const Link = ({children, className, Component, ...restProps}) => (
  <Component {...restProps} className={classnames(baseClassName, className)}>{children}</Component>
);

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  Component: PropTypes.any
};

Link.defaultProps = {
  Component: 'a'
};

export default Link;
