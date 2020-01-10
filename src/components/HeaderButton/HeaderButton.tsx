import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  primary?: boolean;
  href?: string;
  target?: string;
}

const HeaderButton: FunctionComponent<HeaderButtonProps> = ({
  className,
  children,
  primary,
  ...restProps
}: HeaderButtonProps) => {
  const isPrimitive = typeof children === 'string' || typeof children === 'number';
  const Component = restProps.href ? 'a' : 'button';
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={Component}
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
  primary: false,
};

export default HeaderButton;
