import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { AlignType, HasRootRef } from '../../types';
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Задает расположение элементов внутри группы, вертикальное или горизонтальное.
   */
  mode?: 'vertical' | 'horizontal';
  /**
   * Выставляет в зависимости от `mode` отступ по вертикали или горизонтали.
   */
  gap?: 'none' | 'space' | 's' | 'm';
  /**
   * Растягивает компонент на всю ширину контейнера.
   *
   * Note: Для потомков соответствующее поведение нужно определять самостоятельно, где это необходимо.
   */
  stretched?: boolean;
  /**
   * Горизонтальное выравнивание элементов внутри группы.
   */
  align?: AlignType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ButtonGroup
 */
export const ButtonGroup = ({
  mode = 'horizontal',
  gap = 'm',
  stretched = false,
  align = 'left' /* NOTE: Чтобы блоки по-умолчанию не растягивались на всю ширину контейнера */,
  getRootRef,
  className,
  children,
  ...restProps
}: ButtonGroupProps) => {
  return (
    <div
      className={classNames(
        className,
        styles.ButtonGroup,
        {
          vertical: styles['ButtonGroup--mode-vertical'],
          horizontal: styles['ButtonGroup--mode-horizontal'],
        }[mode],
        gap !== 'none' &&
          {
            space: styles['ButtonGroup--gap-space'],
            s: styles['ButtonGroup--gap-s'],
            m: styles['ButtonGroup--gap-m'],
          }[gap],
        stretched && styles['ButtonGroup--stretched'],
        {
          left: styles['ButtonGroup--align-left'],
          center: styles['ButtonGroup--align-center'],
          right: styles['ButtonGroup--align-right'],
        }[align],
      )}
      role="group"
      ref={getRootRef}
      {...restProps}
    >
      {children}
    </div>
  );
};
