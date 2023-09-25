import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { OptionalSubhead } from '../OptionalWrapper/OptionalWrapper';
import styles from './TextTooltip.module.css';

const stylesAppearance = {
  accent: styles['TextTooltip--appearance-accent'],
  white: styles['TextTooltip--appearance-white'],
  black: styles['TextTooltip--appearance-black'],
  inversion: styles['TextTooltip--appearance-inversion'],
};

export interface TextTooltipProps
  extends Omit<HoverPopperProps, 'arrow' | 'arrowClassName' | 'content'> {
  /**
   * Текст тултипа
   */
  text?: React.ReactNode;
  /**
   * Заголовок тултипа
   */
  header?: React.ReactNode;
  /**
   * Стиль отображения подсказки
   */
  appearance?: 'accent' | 'neutral' | 'white' | 'black' | 'inversion';
}

/**
 * @see https://vkcom.github.io/VKUI/#/TextTooltip
 */
export const TextTooltip = ({
  children,
  text,
  header,
  appearance = 'neutral',
  className,
  ...popperProps
}: TextTooltipProps) => {
  return (
    <HoverPopper
      className={classNames(
        styles['TextTooltip'],
        appearance !== 'neutral' && stylesAppearance[appearance],
        className,
      )}
      arrow
      arrowClassName={styles['TextTooltip__arrow']}
      content={
        <React.Fragment>
          <OptionalSubhead weight="2">{header}</OptionalSubhead>
          <OptionalSubhead>{text}</OptionalSubhead>
        </React.Fragment>
      }
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
