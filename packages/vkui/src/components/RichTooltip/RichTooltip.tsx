import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import styles from './RichTooltip.module.css';

const stylesAppearance = {
  accent: styles['RichTooltip--appearance-accent'],
  white: styles['RichTooltip--appearance-white'],
  black: styles['RichTooltip--appearance-black'],
  inversion: styles['RichTooltip--appearance-inversion'],
};

export interface RichTooltipProps extends Omit<HoverPopperProps, 'arrowClassName'> {
  /**
   * Стиль отображения подсказки
   */
  appearance?: 'accent' | 'neutral' | 'white' | 'black' | 'inversion';
}

/**
 * @see https://vkcom.github.io/VKUI/#/RichTooltip
 */
export const RichTooltip = ({
  children,
  arrow = true,
  appearance = 'neutral',
  className,
  ...popperProps
}: RichTooltipProps) => {
  return (
    <HoverPopper
      className={classNames(
        styles['RichTooltip'],
        appearance !== 'neutral' && stylesAppearance[appearance],
        className,
      )}
      arrow={arrow}
      arrowClassName={styles['RichTooltip__arrow']}
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
