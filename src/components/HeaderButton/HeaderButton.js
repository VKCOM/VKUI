import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './HeaderButton.css';

const baseClassName = getClassName('HeaderButton');

const HeaderButton = ({ className, children, primary, ...restProps }) => {
  const isPrimitive = typeof children === 'string' || typeof children === 'number';

  return (
    <Tappable {...restProps} component="button" activeEffectDelay={200} className={classnames(baseClassName, className, {
      'HeaderButton--primary': primary
    })}>
      {isPrimitive ? <span className="HeaderButton__primitive">{children}</span> : children}
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
