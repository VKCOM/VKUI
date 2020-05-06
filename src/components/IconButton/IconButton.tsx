import React, { ReactNode, ButtonHTMLAttributes, FunctionComponent } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  icon: ReactNode;
  href?: string;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  className,
  icon,
  ...restProps
}: IconButtonProps) => {
  const Component = restProps.href ? 'a' : 'button';
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={Component}
      activeEffectDelay={200}
      className={classNames(
        getClassName('IconButton', platform),
        className,
      )}
    >
      {icon}
    </Tappable>
  );
};

export default IconButton;
