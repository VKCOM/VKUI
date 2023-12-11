import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { calculateGap } from '../../lib/layouts/helpers';
import type { GridGaps } from '../../lib/layouts/types';
import { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './SimpleGrid.module.css';

const marginClassNames = {
  'auto': styles['SimpleGrid--margin-auto'],
  'auto-inline': styles['SimpleGrid--margin-auto-inline'],
  'auto-block': styles['SimpleGrid--margin-auto-block'],
};

const alignClassNames = {
  start: styles['SimpleGrid--align-start'],
  end: styles['SimpleGrid--align-end'],
  center: styles['SimpleGrid--align-center'],
  stretch: styles['SimpleGrid--align-stretch'],
  baseline: styles['SimpleGrid--align-baseline'],
};

export interface SimpleGridProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Количество колонок
   */
  columns?: number;
  /**
   * Отступы между элементами
   * Через массив можно задать отступ между строками и столбцами [row, column]
   */
  gap?: GridGaps;
  /**
   * Управляет отступами вокруг контейнера
   * Значение `none` позволяет отключить отступы
   * Значение `auto` позволяет задать платформенные отступы
   * Значение `auto-inline` позволяет задать платформенные inline-отступы
   * Значение `auto-block` позволяет задать платформенные block-отступы
   */
  margin?: 'none' | 'auto' | 'auto-inline' | 'auto-block';
  /**
   * Вместо задания количества колонок, можно указать минимальную ширину элементов
   */
  minColWidth?: number;
  /**
   * Выравнивание элементов по вспомогательной оси, эквивалентно `align-items`
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
}

export const SimpleGrid = ({
  columns = 1,
  gap: gapProp,
  style: styleProp,
  margin = 'none',
  minColWidth,
  align,
  ...props
}: SimpleGridProps) => {
  const style: CSSCustomProperties = {};
  const [rowGap, columnGap] = calculateGap(gapProp);
  if (typeof rowGap === 'number') {
    style['--vkui_internal--grid_row_gap'] = `${rowGap}px`;
  }
  if (typeof columnGap === 'number') {
    style['--vkui_internal--grid_column_gap'] = `${columnGap}px`;
  }
  style['--vkui_internal--grid_columns'] = `${columns}`;
  if (minColWidth) {
    style['--vkui_internal--min_col_width'] = `${minColWidth}px`;
  }

  return (
    <RootComponent
      {...props}
      baseClassName={classNames(
        styles.SimpleGrid,
        margin !== 'none' && marginClassNames[margin],
        align && alignClassNames[align],
        minColWidth && styles['SimpleGrid--with-min-width'],
      )}
      style={{ ...styleProp, ...style }}
    />
  );
};
