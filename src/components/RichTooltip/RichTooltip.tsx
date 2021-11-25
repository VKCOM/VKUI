import * as React from 'react';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { useAppearance } from '../../hooks/useAppearance';
import { classNames } from '../../lib/classNames';
import { prefixClass } from '../../lib/prefixClass';
import './RichTooltip.css';

export interface RichTooltipProps extends HoverPopperProps {
  /**
   * @ignore
   * Можно было бы использовать Omit, но react-docgen в таком случае выкидывает из документации все свойства наследуемого интерфейса
   */
  arrow?: HoverPopperProps['arrow'];
  /**
   * @ignore
   */
  arrowClassName?: HoverPopperProps['arrowClassName'];
}

export const RichTooltip: React.FC<RichTooltipProps> = ({ children, ...popperProps }: RichTooltipProps) => {
  const platform = usePlatform();
  const appearance = useAppearance();

  return (
    <HoverPopper
      vkuiClass={classNames(getClassName('RichTooltip', platform), {
        [`RichTooltip--${appearance}`]: !!appearance,
      })}
      arrow
      arrowClassName={prefixClass('RichTooltip__arrow')}
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
