import { Icon28ChevronRightCircle } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import type { HasRef, HasRootRef, LiteralUnion } from '../../../types';
import type { ImageBaseSize } from '../../ImageBase/ImageBase';
import { Tappable, type TappableOmitProps } from '../../Tappable/Tappable';
import { Subhead, type SubheadProps } from '../../Typography/Subhead/Subhead';
import styles from './HorizontalCellShowMore.module.css';

const sizeClassNames = {
  s: styles.sizeS,
  m: styles.sizeM,
};

export interface HorizontalCellShowMoreProps
  extends Omit<TappableOmitProps, 'getRootRef' | 'size' | 'borderRadiusMode'>,
    HasRef<HTMLElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Задаёт высоту компонента. Должeн соответствовать размеру картинок
   * внутри соседних `HorizontalCell` компонентов.
   *
   * Используйте размеры, заданные дизайн-системой (смотри типы).
   *
   * > ⚠️ Использование кастомного размера – это пограничный кейс.
   *
   * Игнорируется, если `size='s'`.
   */
  height?: LiteralUnion<ImageBaseSize, number>;
  /**
   * Задаёт размер компонента.
   *
   * Значение `s` применяется для `<HorizontalCell size="s"`, в остальных случаях рекомендуется `m`.
   */
  size?: 's' | 'm';
  /**
   * Предназначен для отрисовки текста.
   * По умолчанию для `size='s'` содержит текст `Все`, для `size='m'` - `Показать все`.
   * */
  children?: SubheadProps['children'];
  /**
   * Выравнивание по центру относительно родителя.
   */
  centered?: boolean;
}

/**
 * @see https://vkui.io/components/horizontal-scroll#horizontal-cell-show-more
 */
export const HorizontalCellShowMore = ({
  className,
  style,
  getRef,
  getRootRef,
  height,
  size = 's',
  children = size === 's' ? 'Все' : 'Показать все',
  centered = false,
  ...restProps
}: HorizontalCellShowMoreProps): React.ReactNode => {
  return (
    <div
      style={style}
      className={classNames(
        styles.host,
        centered && styles.centered,
        sizeClassNames[size],
        className,
      )}
      ref={getRootRef}
    >
      <Tappable
        style={size === 's' ? undefined : { height }}
        className={styles.body}
        getRootRef={getRef}
        activeMode="opacity"
        hoverMode="opacity"
        {...restProps}
      >
        <Icon28ChevronRightCircle className={styles.icon} />

        <Subhead className={styles.text} weight="2">
          {children}
        </Subhead>
      </Tappable>
    </div>
  );
};
