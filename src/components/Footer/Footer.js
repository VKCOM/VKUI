import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';

import Div from '../Div/Div';

const Footer = ({ className, children, ...restProps }) => (
  <Div {...restProps} className={classnames('Footer', className)}>{children}</Div>
);

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Footer;
