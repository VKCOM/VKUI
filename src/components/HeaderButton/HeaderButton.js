import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './HeaderButton.css';

const baseClassName = getClassName('HeaderButton');

const HeaderButton = ({ className, children, ...restProps }) => (
  <Tappable className={classnames(baseClassName, className)} {...restProps}>
    <div className="HeaderButton__area" />
    {children}
  </Tappable>
);

HeaderButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default HeaderButton;
