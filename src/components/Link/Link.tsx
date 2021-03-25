import { FunctionComponent, AnchorHTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import Tappable, { TappableProps } from '../Tappable/Tappable';

export interface LinkProps extends AnchorHTMLAttributes<HTMLElement>, TappableProps {}

const Link: FunctionComponent<LinkProps> = ({
  children,
  Component,
  ...restProps
}: LinkProps) => {
  const platform = usePlatform();
  const baseClassName = getClassName('Link', platform);

  if (!Component) {
    if (restProps.href) {
      Component = 'a';
    } else {
      Component = 'button';
      restProps = { type: 'button', ...restProps };
    }
  }

  return (
    <Tappable
      Component={Component}
      {...restProps}
      vkuiClass={baseClassName}
      hasActive={false}
      hoverMode="opacity"
    >{children}</Tappable>
  );
};

export default Link;
