import { FC, AnchorHTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import './Link.css';

export interface LinkProps extends AnchorHTMLAttributes<HTMLElement>, TappableProps {}

const Link: FC<LinkProps> = ({
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
      focusVisibleOutline="outside"
    >
      {children}
    </Tappable>
  );
};

export default Link;
