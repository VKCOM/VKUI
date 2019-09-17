import React, { FunctionComponent, HTMLAttributes } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface HeaderButtonProps extends HTMLAttributes<HTMLLinkElement | HTMLButtonElement>, HasChildren {
  primary?: boolean,
  /**
   * Делает из кнопки ссылку
   */
  href?: string
}

const HeaderButton: FunctionComponent<HeaderButtonProps> = ({
  className,
  children,
  primary,
  ...restProps
}: HeaderButtonProps) => {
  const isPrimitive = typeof children === 'string' || typeof children === 'number';
  const component = restProps.href ? 'a' : 'button';
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      component={component}
      activeEffectDelay={200}
      className={classNames(
        getClassName('HeaderButton', platform),
        className,
        { 'HeaderButton--primary': primary }
      )}
    >
      {isPrimitive ? <span className="HeaderButton__primitive">{children}</span> : children}
    </Tappable>
  );
};

HeaderButton.defaultProps = {
  primary: false
};

export default HeaderButton;
