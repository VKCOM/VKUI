import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './HeaderButton.css';

const baseClassName = getClassName('HeaderButton');

const HeaderButton = ({ className, children, primary, ...restProps }) => {
  return (
    <Tappable component="button" className={classnames(baseClassName, className, {
      'HeaderButton--primary': primary,
      'HeaderButton--icon': children && children.type && children.type.name === 'SvgIcon'
    })} {...restProps}>
      {children}
    </Tappable>
  );
};

HeaderButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.bool
};

HeaderButton.defaultProps = {
  primary: false
};

export default HeaderButton;
