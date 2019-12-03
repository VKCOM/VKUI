import React, { ComponentType, FunctionComponent, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasRef, HasRootRef, OldRef, RefWithCurrent } from '../../types/props';

export interface InnerComponentProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement> {
  ref: OldRef<HTMLElement> | RefWithCurrent<HTMLElement>;
}

export interface LinkProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  Component: string | ComponentType<InnerComponentProps>;
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
