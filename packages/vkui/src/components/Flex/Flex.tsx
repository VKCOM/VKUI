import { classNames } from '@vkontakte/vkjs';
import { CSSCustomProperties, HTMLAttributesWithRootRef, LiteralUnion } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { FlexItem, FlexItemProps } from './FlexItem/FlexItem';
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

type FlexGap = LiteralUnion<4 | 8 | 16 | 24 | 32, number>;

type FlexContentProps =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface FlexProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Направление осей, эквивалентно `flex-direction`
   */
  direction?: 'row' | 'column';
  /**
   * Отступы между элементами
   * Через массив можно задать отступ между столбцами и строками [column, row]
   */
  gap?: FlexGap | [FlexGap, FlexGap];
  /**
   * Отключает перенос контента, эквивалентно `flex-wrap=nowrap`
   */
  noWrap?: boolean;
  /**
   * Выравнивание элементов по вспомогательной оси, эквивалентно `align-items`
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  /**
   * Выравнивание элементов по главной оси, эквивалентно `justify-content`
   */
  justify?: FlexContentProps;
  /**
   * Значение `auto` позволяет задать платформенные отступы вокруг контейнера
   */
  margin?: 'none' | 'auto';
  /**
   * Для инвертирования направления, эквивалентно `row-reverse` `column-reverse`
   */
  reverse?: boolean;
}

function calculateGap(gap: FlexProps['gap']) {
  if (!gap) {
    return { columnGap: undefined, rowGap: undefined };
  }
  if (typeof gap === 'number') {
    return { columnGap: gap, rowGap: gap };
  }

  return { columnGap: gap[0], rowGap: gap[1] };
}

export const Flex = ({
  gap,
  align,
  justify,
  margin = 'none',
  noWrap = false,
  direction = 'row',
  style: styleProp,
  reverse = false,
  ...props
}: FlexProps) => {
  const { rowGap, columnGap } = calculateGap(gap);
  const style: CSSCustomProperties = {};

  if (typeof rowGap === 'number') {
    style['--vkui_internal--flex_row_gap'] = `${rowGap}px`;
  }
  if (typeof columnGap === 'number') {
    style['--vkui_internal--flex_column_gap'] = `${columnGap}px`;
  }

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
      )}
      style={{ ...styleProp, ...style }}
    />
  );
};

Flex.Item = FlexItem;
