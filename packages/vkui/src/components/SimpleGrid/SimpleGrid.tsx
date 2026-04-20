import { classNames } from '@vkontakte/vkjs';
import {
  calculateGap,
  columnGapClassNames,
  type GapsProp,
  resolveLayoutProps,
  rowGapClassNames,
} from '../../lib/layouts';
import type { LayoutProps, MarginProp } from '../../lib/layouts/types';
import type { CSSCustomProperties } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import type { RootComponentProps } from '../RootComponent/RootComponent';
import styles from './SimpleGrid.module.css';

type SpecificMargin = 'auto' | 'auto-inline' | 'auto-block' | 'none';

const marginClassNames: Record<SpecificMargin, string | undefined> = {
  'none': undefined,
  'auto': styles.marginAuto,
  'auto-inline': styles.marginAutoInline,
  'auto-block': styles.marginAutoBlock,
};

function isSpecialMargin(margin: SimpleGridProps['margin']): margin is SpecificMargin {
  return (
    margin === 'auto' || margin === 'auto-inline' || margin === 'auto-block' || margin === 'none'
  );
}

const alignClassNames = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
  stretch: styles.alignStretch,
  baseline: styles.alignBaseline,
};

const displayClassNames = {
  'none': styles.displayNone,
  'inline-grid': styles.displayInlineGrid,
};

export interface SimpleGridProps
  extends RootComponentProps<HTMLElement>,
    Omit<LayoutProps, 'margin'> {
  /**
   * Количество колонок.
   */
  columns?: number | undefined;
  /**
   * Отступы между элементами.
   * Значение из списка предопределённых пресетов или число, которое будет приведено к пикселям.
   * Через массив можно задать отступ между столбцами и строками [row, column], если они отличаются.
   */
  gap?: GapsProp | undefined;
  /**
   * Внешние отступы контейнера.
   * Дополнительно поддерживаются специальные значения:
   * `none` — отключает дополнительные отступы;
   * `auto` — включает платформенные отступы вокруг контейнера;
   * `auto-inline` — включает платформенные inline-отступы;
   * `auto-block` — включает платформенные block-отступы.
   */
  margin?: 'none' | 'auto' | 'auto-inline' | 'auto-block' | MarginProp | undefined;
  /**
   * Вместо задания количества колонок, можно указать минимальную ширину элементов.
   */
  minColWidth?: number | undefined;
  /**
   * Выравнивание элементов по вспомогательной оси, эквивалентно `align-items`.
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline' | undefined;
  /**
   * Возможность задать css-свойство `display`.
   */
  display?: 'none' | 'grid' | 'inline-grid' | undefined;
}

/**
 * @see https://vkui.io/components/simple-grid
 */
export const SimpleGrid = ({
  columns = 1,
  gap = 0,
  margin = 'none',
  minColWidth,
  align = 'stretch',
  display = 'grid',
  ...restProps
}: SimpleGridProps) => {
  const resolvedProps = resolveLayoutProps(
    isSpecialMargin(margin) ? restProps : { ...restProps, margin },
  );
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
      baseClassName={classNames(
        styles.host,
        isSpecialMargin(margin) && marginClassNames[margin],
        alignClassNames[align],
        minColWidth && styles.withMinWidth,
        typeof columnGap === 'string' && columnGapClassNames[columnGap],
        typeof rowGap === 'string' && rowGapClassNames[rowGap],
        display !== 'grid' && displayClassNames[display],
      )}
      baseStyle={style}
      {...resolvedProps}
    />
  );
};
