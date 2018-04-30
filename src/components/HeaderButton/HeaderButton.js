import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './HeaderButton.css';

const baseClassName = getClassName('HeaderButton');

const HeaderButton = ({ className, children, primary, ...restProps }) => {
  return (
    <Tappable className={classnames(baseClassName, className, {
      'HeaderButton--primary': primary
    })} {...restProps}>
      {typeof children === 'string' ? <span className="HeaderButton__str">{children}</span> : children}
    </Tappable>
  );
};

HeaderButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
  primary: PropTypes.bool
};

HeaderButton.defaultProps = {
  primary: false
};

export default HeaderButton;
