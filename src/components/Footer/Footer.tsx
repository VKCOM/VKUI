import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';

import Div from '../Div/Div';
import { StyleObject, HasChildren } from '../../types/props';

export interface FooterProps extends StyleObject, HasChildren {}

const Footer = ({ className, children, ...restProps }: FooterProps) => (
  <Div {...restProps} className={classNames('Footer', className)}>
    {children}
  </Div>
);

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Footer;
