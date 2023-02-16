import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './TextTooltip.module.css';

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
        styles[`TextTooltip--appearance-${appearance}`],
        className,
      )}
      arrow
      arrowClassName={styles['TextTooltip__arrow']}
      content={
        <React.Fragment>
          {hasReactNode(header) && (
            <Subhead weight="2" className={styles['TextTooltip__header']}>
              {header}
            </Subhead>
          )}
          {hasReactNode(text) && <Subhead className={styles['TextTooltip__text']}>{text}</Subhead>}
        </React.Fragment>
      }
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
