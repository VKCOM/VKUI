import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren, HasClassName } from '../../types/props';

const baseClassName = getClassName('HeaderButton');

export interface HeaderButtonProps extends HasChildren, HasClassName {
  href?: string;
  primary?: boolean;
  onClick: () => void;
}

const HeaderButton = ({ className, children, primary, ...restProps }: HeaderButtonProps) => {
  const isPrimitive = typeof children === 'string' || typeof children === 'number';
  const component = restProps.href ? 'a' : 'button';

  return (
    <Tappable
      {...restProps}
      onClick={restProps.onClick}
      component={component}
      activeEffectDelay={200}
      className={classNames(baseClassName, className, { 'HeaderButton--primary': primary })}
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
