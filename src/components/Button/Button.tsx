import React, { FunctionComponent, ReactNode, ElementType, ButtonHTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Tappable from '../Tappable/Tappable';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import { HasAlign, HasRootRef } from '../../types';
import usePlatform from '../../hooks/usePlatform';

export interface VKUIButtonProps extends HasAlign {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | 'overlay_primary' | 'overlay_secondary' | 'overlay_outline';
  size?: 's' | 'm' | 'l';
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
  const hasIcons = Boolean(before || after);
  let content = null;

  if (children) {
    switch (true) {
      case size === 'l':
        content =
          <Title level="3" weight="medium" Component="div" className="Button__content">
            {children}
          </Title>;
        break;
      case size === 'm':
        content =
          <Text weight="medium" className="Button__content">
            {children}
          </Text>;
        break;
      case size === 's' && !hasIcons:
        content =
          <Subhead
            weight="medium"
            Component="div"
            className="Button__content"
          >
            {children}
          </Subhead>;
        break;
      case size === 's' && hasIcons:
        content =
          <Caption
            caps
            level="2"
            weight="semibold"
            className="Button__content--caps"
          >
            {children}
          </Caption>;
        break;
    }
  }

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
      {content}
      {after && <div className="Button__after">{after}</div>}
    </div>
  </Tappable>;
};

Button.defaultProps = {
  mode: 'primary',
  Component: 'button',
  size: 's',
  stretched: false,
  stopPropagation: true,
};

export default Button;
