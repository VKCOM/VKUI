import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import './Link.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLElement>, TappableProps {}

const Link: React.FC<LinkProps> = ({
  children,
  ...restProps
}: LinkProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component={restProps.href ? 'a' : 'button'}
      {...restProps}
      vkuiClass={getClassName('Link', platform)}
      hasActive={false}
      hoverMode="opacity"
      focusVisibleMode="outside"
    >
      {children}
    </Tappable>
  );
};

export default Link;
