import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('HeaderButton');

const HeaderButton = ({ className, children, primary, ...restProps }) => {
  const isPrimitive = typeof children === 'string' || typeof children === 'number';
  const component = restProps.href ? 'a' : 'button';

  return (
    <Tappable
      {...restProps}
      component={component}
      activeEffectDelay={200}
      className={classnames(baseClassName, className, { 'HeaderButton--primary': primary })}
    >
      {isPrimitive ? <span className="HeaderButton__primitive">{children}</span> : children}
    </Tappable>
  );
};

HeaderButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.bool,
  /**
   * Делает из кнопки ссылку
   */
  href: PropTypes.string
};

HeaderButton.defaultProps = {
  primary: false
};

export default HeaderButton;
