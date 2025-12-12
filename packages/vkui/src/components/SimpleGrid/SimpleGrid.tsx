import { classNames } from '@vkontakte/vkjs';
import {
  type AdaptiveProp,
  type GapsProp,
  type LayoutProps,
  resolveLayoutProps,
} from '../../lib/layouts';
import { RootComponent } from '../RootComponent/RootComponent';
import type { RootComponentProps } from '../RootComponent/RootComponent';
import styles from './SimpleGrid.module.css';

const marginClassNames = {
  'auto': styles.marginAuto,
  'auto-inline': styles.marginAutoInline,
  'auto-block': styles.marginAutoBlock,
};

export interface SimpleGridProps
  extends Omit<RootComponentProps<HTMLElement>, 'baseClassName'>,
    LayoutProps {
  /**
   * Количество колонок.
   */
  columns?: AdaptiveProp<number>;
  /**
   * Отступы между элементами.
   * Значение из списка предопределённых пресетов или число, которое будет приведено к пикселям.
   * Через массив можно задать отступ между столбцами и строками [row, column], если они отличаются.
   */
  gap?: AdaptiveProp<GapsProp>;
  /**
   * Управляет отступами вокруг контейнера
   * Значение `none` позволяет отключить отступы
   * Значение `auto` позволяет задать платформенные отступы
   * Значение `auto-inline` позволяет задать платформенные inline-отступы
   * Значение `auto-block` позволяет задать платформенные block-отступы.
   */
  margin?: 'none' | 'auto' | 'auto-inline' | 'auto-block';
  /**
   * Вместо задания количества колонок, можно указать минимальную ширину элементов.
   */
  minColWidth?: AdaptiveProp<number>;
  /**
   * Выравнивание элементов по вспомогательной оси, эквивалентно `align-items`.
   */
  align?: AdaptiveProp<'start' | 'end' | 'center' | 'stretch' | 'baseline'>;
  /**
   * Возможность задать css-свойство `display`.
   */
  display?: AdaptiveProp<'none' | 'grid' | 'inline-grid'>;
}

/**
 * @see https://vkui.io/components/simple-grid
 */
export const SimpleGrid = ({
  columns = 1,
  margin = 'none',
  align = 'stretch',
  display = 'grid',
  ...restProps
}: SimpleGridProps) => {
  const resolvedProps = resolveLayoutProps({ align, columns, display, ...restProps });
  return (
    <RootComponent
      {...resolvedProps}
      baseClassName={classNames(
        styles.host,
        margin !== 'none' && marginClassNames[margin],
        restProps.minColWidth && styles.withMinWidth,
      )}
    />
  );
};
