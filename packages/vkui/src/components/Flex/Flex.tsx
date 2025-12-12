import { classNames } from '@vkontakte/vkjs';
import {
  type AdaptiveProp,
  type GapsProp,
  type LayoutProps,
  resolveLayoutProps,
} from '../../lib/layouts';
import { RootComponent } from '../RootComponent/RootComponent';
import type { RootComponentProps } from '../RootComponent/RootComponent';
import { FlexItem, type FlexItemProps } from './FlexItem/FlexItem';
import styles from './Flex.module.css';

type AlignValues = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

export type { FlexItemProps };
export interface FlexProps
  extends Omit<RootComponentProps<HTMLElement>, 'baseClassName'>,
    LayoutProps {
  /**
   * Направление осей, эквивалентно `flex-direction`.
   */
  direction?: AdaptiveProp<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
  /**
   * Отступы между элементами.
   * Значение из списка предопределённых пресетов или число, которое будет приведено к пикселям.
   * Через массив можно задать отступ между столбцами и строками [row, column], если они отличаются.
   */
  gap?: AdaptiveProp<GapsProp>;
  /**
   * Отключает перенос контента, эквивалентно `flex-wrap=nowrap`.
   */
  noWrap?: AdaptiveProp<boolean>;
  /**
   * Выравнивание элементов по вспомогательной оси, эквивалентно `align-items`.
   */
  align?: AdaptiveProp<AlignValues>;
  /**
   * Выравнивание элементов по главной оси, эквивалентно `justify-content`.
   */
  justify?: AdaptiveProp<
    'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  >;
  /**
   * Значение `auto` позволяет задать платформенные отступы вокруг контейнера.
   */
  margin?: 'none' | 'auto';
  /**
   * Для задания выравнивания, отличного от установленного на родителе, эквивалентно `align-self`.
   */
  alignSelf?: AdaptiveProp<'start' | 'end' | 'center' | 'baseline' | 'stretch'>;
  /**
   * Возможность задать css-свойство `display`.
   */
  display?: AdaptiveProp<'none' | 'flex' | 'inline-flex'>;
}

/**
 * @see https://vkui.io/components/flex
 */
export const Flex: React.FC<FlexProps> & {
  /**
   * @deprecated Since 7.11.0. Будет удалено в **VKUI v9**.
   * Используйте компонент `Flex`.
   */
  Item: typeof FlexItem;
} = ({
  gap = 0,
  margin = 'none',
  noWrap = false,
  direction = 'row',
  children,
  alignSelf,
  display = 'flex',
  ...restProps
}: FlexProps) => {
  const resolvedProps = resolveLayoutProps({ gap, noWrap, direction, display, ...restProps });

  return (
    <RootComponent
      {...resolvedProps}
      baseClassName={classNames(styles.host, margin !== 'none' && styles.marginAuto)}
    >
      {children}
    </RootComponent>
  );
};

Flex.Item = FlexItem;
