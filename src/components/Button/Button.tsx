import React, { FunctionComponent, ReactNode, ElementType, ButtonHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Tappable from '../Tappable/Tappable';
import { HasAlign, HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface VKUIButtonProps extends HasAlign {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | 'overlay_primary' | 'overlay_secondary' | 'overlay_outline';
  size?: 'm' | 'l' | 'xl';
  stretched?: boolean;
  before?: ReactNode;
  after?: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, VKUIButtonProps {
  Component?: ElementType;
  stopPropagation?: boolean;
  href?: string;
  target?: string;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const platform = usePlatform();
  const { className, size, mode, stretched, align, children, before, after, getRootRef, Component, ...restProps } = props;

  return <Tappable {...restProps}
    className={
      classNames(
        getClassName('Button', platform),
        className,
        `Button--sz-${size}`,
        `Button--lvl-${mode}`,
        `Button--aln-${align || 'center'}`,
        {
          ['Button--str']: stretched,
        },
      )
    }
    getRootRef={getRootRef}
    Component={restProps.href ? 'a' : Component}
  >
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
