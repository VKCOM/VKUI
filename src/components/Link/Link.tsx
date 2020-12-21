import React, { ElementType, FunctionComponent, AnchorHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import Tappable, { TappableProps } from '../Tappable/Tappable';

export interface LinkProps extends AnchorHTMLAttributes<HTMLElement>, TappableProps {
  Component?: ElementType;
}

const Link: FunctionComponent<LinkProps> = ({
  children,
  className,
  Component,
  ...restProps
}: LinkProps) => {
  const platform = usePlatform();
  const baseClassName = getClassName('Link', platform);

  if (!Component) {
    if (restProps.href) {
      Component = 'a';
    } else {
      Component = 'button';
      restProps = { type: 'button', ...restProps };
    }
  }

  return (
    <Tappable
      Component={Component}
      {...restProps}
      className={classNames(baseClassName, className)}
    >{children}</Tappable>
  );
};

export default Link;
