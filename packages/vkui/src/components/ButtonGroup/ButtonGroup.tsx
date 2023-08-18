import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { AlignType, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './ButtonGroup.module.css';

const stylesMode = {
  vertical: styles['ButtonGroup--mode-vertical'],
  horizontal: styles['ButtonGroup--mode-horizontal'],
};

const stylesGap = {
  space: styles['ButtonGroup--gap-space'],
  s: styles['ButtonGroup--gap-s'],
  m: styles['ButtonGroup--gap-m'],
};

const stylesAlign = {
  left: styles['ButtonGroup--align-left'],
  center: styles['ButtonGroup--align-center'],
  right: styles['ButtonGroup--align-right'],
};

export interface ButtonGroupProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
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
  ...restProps
}: ButtonGroupProps) => {
  return (
    <RootComponent
      baseClassName={classNames(
        styles.ButtonGroup,
        stylesMode[mode],
        gap !== 'none' && stylesGap[gap],
        stretched && styles['ButtonGroup--stretched'],
        stylesAlign[align],
      )}
      role="group"
      {...restProps}
    />
  );
};
