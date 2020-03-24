import React, { ElementType, FunctionComponent, LinkHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';

export interface LinkProps extends LinkHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  Component?: ElementType;
}

const Link: FunctionComponent<LinkProps> = ({
  children,
  className,
  Component,
  getRootRef,
  ...restProps
}: LinkProps) => {
  const platform = usePlatform();
  const baseClassName = getClassName('Link', platform);

  return (
    <Component {...restProps} ref={getRootRef} className={classNames(baseClassName, className)}>{children}</Component>
  );
};

Link.defaultProps = {
  Component: 'a',
};

export default Link;
