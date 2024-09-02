import { Children } from 'react';
import { classNames } from '@vkontakte/vkjs';
import {
  calculateGap,
  columnGapClassNames,
  type GapProp,
  type GapsProp,
  rowGapClassNames,
} from '../../lib/layouts';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { FlexItem, type FlexItemProps } from './FlexItem/FlexItem';
import styles from './Flex.module.css';

export type { FlexItemProps };

const justifyClassNames = {
  'start': styles['Flex--justify-start'],
  'end': styles['Flex--justify-end'],
  'center': styles['Flex--justify-center'],
  'space-around': styles['Flex--justify-space-around'],
  'space-between': styles['Flex--justify-space-between'],
  'space-evenly': styles['Flex--justify-space-evenly'],
};

const alignClassNames = {
  start: styles['Flex--align-start'],
  end: styles['Flex--align-end'],
  center: styles['Flex--align-center'],
  stretch: styles['Flex--align-stretch'],
  baseline: styles['Flex--align-baseline'],
};

type FlexContentProps =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface FlexProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Направление осей, эквивалентно `flex-direction`.
   */
  direction?: 'row' | 'column';
  /**
   * Отступы между элементами.
   * Значение из списка предопределённых пресетов или число, которое будет приведено к пикселям.
   * Через массив можно задать отступ между столбцами и строками [column, row], если они отличаются.
   *
   * TODO [>=7]: порядок следования будет [row, column]
   */
  gap?: GapsProp;
  /**
   * Отключает перенос контента, эквивалентно `flex-wrap=nowrap`.
   */
  noWrap?: boolean;
  /**
   * Выравнивание элементов по вспомогательной оси, эквивалентно `align-items`.
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  /**
   * Выравнивание элементов по главной оси, эквивалентно `justify-content`.
   */
  justify?: FlexContentProps;
  /**
   * Значение `auto` позволяет задать платформенные отступы вокруг контейнера.
   */
  margin?: 'none' | 'auto';
  /**
   * Для инвертирования направления, эквивалентно `row-reverse` `column-reverse`.
   */
  reverse?: boolean;
}

export const Flex: React.FC<FlexProps> & {
  Item: typeof FlexItem;
} = ({
  gap,
  align,
  justify,
  margin = 'none',
  noWrap = false,
  direction = 'row',
  style: styleProp,
  reverse = false,
  children,
  ...props
}: FlexProps) => {
  const withGaps = Children.count(children) > 1 && gap;
  const [columnGap, rowGap] = calculateGap(withGaps ? gap : undefined);

  return (
    <RootComponent
      {...props}
      baseClassName={classNames(
        styles.Flex,
        !noWrap && styles['Flex--wrap'],
        reverse && styles['Flex--reverse'],
        direction !== 'row' && styles['Flex--direction-column'],
        margin !== 'none' && styles['Flex--margin-auto'],
        align && alignClassNames[align],
        justify && justifyClassNames[justify],
        withGaps && styles['Flex--withGaps'],
        withGaps && getGapsPresets(rowGap, columnGap),
      )}
      style={withGaps ? { ...getGapsByUser(rowGap, columnGap), ...styleProp } : styleProp}
    >
      {children}
    </RootComponent>
  );
};

function getGapsPresets(rowGap?: GapProp, columnGap?: GapProp) {
  return classNames(
    typeof rowGap === 'string' && rowGapClassNames[rowGap],
    typeof columnGap === 'string' && columnGapClassNames[columnGap],
  );
}

function getGapsByUser(rowGap?: GapProp, columnGap?: GapProp) {
  const style: CSSCustomProperties = {};

  if (typeof rowGap === 'number') {
    style['--vkui_internal--row_gap'] = `${rowGap}px`;
  }
  if (typeof columnGap === 'number') {
    style['--vkui_internal--column_gap'] = `${columnGap}px`;
  }

  return style;
}

Flex.Item = FlexItem;
