import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface PanelHeaderButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  primary?: boolean;
  href?: string;
  target?: string;
  label?: ReactNode;
}

const PanelHeaderButton: FunctionComponent<PanelHeaderButtonProps> = ({
  className,
  children,
  primary,
  label,
  ...restProps
}: PanelHeaderButtonProps) => {
  const isPrimitive = typeof children === 'string' || typeof children === 'number';
  const Component = restProps.href ? 'a' : 'button';
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={Component}
      activeEffectDelay={200}
      className={classNames(
        getClassName('PanelHeaderButton', platform),
        className,
        {
          'PanelHeaderButton--primary': primary,
          'PanelHeaderButton--primitive': isPrimitive,
        },
      )}
    >
      {children}
      {label}
    </Tappable>
  );
};

PanelHeaderButton.defaultProps = {
  primary: false,
};

export default PanelHeaderButton;
