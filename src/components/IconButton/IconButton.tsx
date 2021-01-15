import React, { ReactNode, ButtonHTMLAttributes, FunctionComponent } from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasLinkProps } from '../../types';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLElement>, HasLinkProps {
  /**
   * @deprecated будет удалено в 5.0.0. Используйте `children`
   */
  icon: ReactNode;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  className,
  icon,
  children,
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
      {icon || children}
    </Tappable>
  );
};

export default IconButton;
