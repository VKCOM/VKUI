import React, { FunctionComponent, ReactNode, ElementType, ButtonHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Tappable from '../Tappable/Tappable';
import { HasRootRef } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface VKUIButtonProps {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | 'overlay_primary' | 'overlay_secondary' | 'overlay_outline';
  size?: 'm' | 'l' | 'xl';
  align?: 'left' | 'center' | 'right';
  stretched?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  href?: string;
  target?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, VKUIButtonProps {
  Component?: ElementType;
  stopPropagation?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const platform = usePlatform();
  const { className, size, mode, stretched, align, children, before, after, getRootRef, Component, ...restProps } = props;

  return <Tappable {...restProps} className={classNames(getClassName('Button', platform), className, {
    [`Button--sz-${size}`]: true,
    [`Button--lvl-${mode}`]: true,
    [`Button--aln-${align || 'center'}`]: true,
    ['Button--str']: stretched,
  })} getRootRef={getRootRef} Component={restProps.href ? 'a' : Component}>
    <div className="Button__in">
      {before && <div className="Button__before">{before}</div>}
      {children && <div className="Button__content">{children}</div>}
      {after && <div className="Button__after">{after}</div>}
    </div>
  </Tappable>;
};

Button.defaultProps = {
  mode: 'primary',
  Component: 'button',
  size: 'm',
  stretched: false,
  stopPropagation: true,
};

export default Button;
