import { classNames } from '@vkontakte/vkjs';
import {
  calculateGap,
  columnGapClassNames,
  type GapProp,
  type GapsProp,
  resolveLayoutProps,
  rowGapClassNames,
} from '../../lib/layouts';
import type { LayoutProps } from '../../lib/layouts/types';
import type { CSSCustomProperties } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import type { RootComponentProps } from '../RootComponent/RootComponent';
import { FlexItem, type FlexItemProps } from './FlexItem/FlexItem';
import styles from './Flex.module.css';

export type { FlexItemProps };

const justifyClassNames = {
  'start': styles.justifyStart,
  'end': styles.justifyEnd,
  'center': styles.justifyCenter,
  'space-around': styles.justifySpaceAround,
  'space-between': styles.justifySpaceBetween,
  'space-evenly': styles.justifySpaceEvenly,
};

const alignClassNames = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter,
  stretch: styles.alignStretch,
  baseline: styles.alignBaseline,
};

const displayClassNames = {
  'none': styles.displayNone,
  'inline-flex': styles.displayInlineFlex,
};

type FlexContentProps =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface FlexProps extends RootComponentProps<HTMLElement>, LayoutProps {
  /**
   * Направление осей, эквивалентно `flex-direction`.
   */
  direction?: 'row' | 'column' | undefined;
  /**
   * Отступы между элементами.
   * Значение из списка предопределённых пресетов или число, которое будет приведено к пикселям.
   * Через массив можно задать отступ между столбцами и строками [row, column], если они отличаются.
   */
  gap?: GapsProp | undefined;
  /**
   * Отключает перенос контента, эквивалентно `flex-wrap=nowrap`.
   */
  noWrap?: boolean | undefined;
  /**
   * Выравнивание элементов по вспомогательной оси, эквивалентно `align-items`.
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline' | undefined;
  /**
   * Выравнивание элементов по главной оси, эквивалентно `justify-content`.
   */
  justify?: FlexContentProps | undefined;
  /**
   * Значение `auto` позволяет задать платформенные отступы вокруг контейнера.
   */
  margin?: 'none' | 'auto' | undefined;
  /**
   * Для инвертирования направления, эквивалентно `row-reverse` `column-reverse`.
   */
  reverse?: boolean | undefined;
  /**
   * Возможность задать css-свойство `display`.
   */
  display?: 'none' | 'flex' | 'inline-flex' | undefined;
}

/**
 * @see https://vkui.io/components/flex
 */
export const Flex: React.FC<FlexProps> & {
  /**
   * @deprecated Since 7.11.0. Будет удалено в **VKUI v9**.
   * Используйте компонент `Box`.
   */
  Item: typeof FlexItem;
} = ({
  gap = 0,
  align,
  justify,
  margin = 'none',
  noWrap = false,
  direction = 'row',
  reverse = false,
  display = 'flex',
  ...restProps
}: FlexProps) => {
  const [rowGap, columnGap] = calculateGap(gap);
  const resolvedProps = resolveLayoutProps(restProps);

  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        !noWrap && styles.wrap,
        reverse && styles.reverse,
        direction !== 'row' && styles.directionColumn,
        margin !== 'none' && styles.marginAuto,
        align && alignClassNames[align],
        justify && justifyClassNames[justify],
        getGapsPresets(rowGap, columnGap),
        display !== 'flex' && displayClassNames[display],
      )}
      baseStyle={getGapsByUser(rowGap, columnGap)}
      {...resolvedProps}
    />
  );
};

function getGapsPresets(rowGap: GapProp, columnGap: GapProp) {
  return classNames(
    typeof rowGap === 'string' && rowGapClassNames[rowGap],
    typeof columnGap === 'string' && columnGapClassNames[columnGap],
  );
}

function getGapsByUser(rowGap: GapProp, columnGap: GapProp) {
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
