import { classNames } from '@vkontakte/vkjs';
import {
  calculateGap,
  columnGapClassNames,
  type GapsProp,
  rowGapClassNames,
} from '../../lib/layouts';
import type { CSSCustomProperties } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import type { RootComponentProps } from '../RootComponent/RootComponent';
import styles from './SimpleGrid.module.css';

const marginClassNames = {
  'auto': styles.marginAuto,
  'auto-inline': styles.marginAutoInline,
  'auto-block': styles.marginAutoBlock,
};

const alignClassNames = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
  stretch: styles.alignStretch,
  baseline: styles.alignBaseline,
};

export interface SimpleGridProps extends Omit<RootComponentProps<HTMLElement>, 'baseClassName'> {
  /**
   * Количество колонок
   */
  columns?: number;
  /**
   * Отступы между элементами.
   * Значение из списка предопределённых пресетов или число, которое будет приведено к пикселям.
   * Через массив можно задать отступ между столбцами и строками [row, column], если они отличаются.
   */
  gap?: GapsProp;
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
  gap,
  margin = 'none',
  minColWidth,
  align = 'stretch',
  ...props
}: SimpleGridProps) => {
  const style: CSSCustomProperties = {};
  const [rowGap, columnGap] = calculateGap(gap);
  if (typeof rowGap === 'number') {
    style['--vkui_internal--row_gap'] = `${rowGap}px`;
  }
  if (typeof columnGap === 'number') {
    style['--vkui_internal--column_gap'] = `${columnGap}px`;
  }
  style['--vkui_internal--grid_columns'] = `${columns}`;
  if (minColWidth) {
    style['--vkui_internal--min_col_width'] = `${minColWidth}px`;
  }

  return (
    <RootComponent
      {...props}
      baseClassName={classNames(
        styles.host,
        margin !== 'none' && marginClassNames[margin],
        alignClassNames[align],
        minColWidth && styles.withMinWidth,
        typeof columnGap === 'string' && columnGapClassNames[columnGap],
        typeof rowGap === 'string' && rowGapClassNames[rowGap],
      )}
      baseStyle={style}
    />
  );
};
