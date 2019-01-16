import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';

import Div from '../Div/Div';

const Footer = ({ className, children, ...restProps }) => (
  <Div {...restProps} className={classNames('Footer', className)}>{children}</Div>
);

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Footer;
