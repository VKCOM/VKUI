import { Icon28ChevronRightCircle } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import type { HasRef, HasRootRef, LiteralUnion } from '../../../types';
import type { ImageBaseSize } from '../../ImageBase/ImageBase';
import { Tappable, type TappableProps } from '../../Tappable/Tappable';
import { Subhead, type SubheadProps } from '../../Typography/Subhead/Subhead';
import styles from './HorizontalCellShowMore.module.css';

const sizeClassNames = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
};

export interface HorizontalCellShowMoreProps
  extends Omit<TappableProps, 'getRootRef' | 'size'>,
    HasRef<HTMLElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Задаёт высоту компонента. Должeн соответствовать размеру картинок
   * внутри соседних `HorizontalCell` компонентов.
   *
   * Используйте размеры заданные дизайн-системой (см. типы).
   *
   * > ⚠️ Использование кастомного размера – это пограничный кейс.
   *
   * Игнорируется если `size='s'`.
   */
  height?: LiteralUnion<ImageBaseSize, number>;
  /**
   * Задаёт размер компонента. Аналогичен такому же пропу у [HorizontalCell](https://vkcom.github.io/VKUI/#/HorizontalCellShowMore?id=props).
   * Должен соответствовать значению пропа `size` соседних `HorizontalCell`.
   */
  size?: 's' | 'm' | 'l';
  /**
   * Предназначен для отрисовки текста.
   * По умолчанию для `size='s'` содержит текст `Все`, для других размеров `Показать все`.
   * */
  children?: SubheadProps['children'];
  /**
   * Выравнивание по центру относительно родителя
   */
  centered?: boolean;
}

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
        <Icon28ChevronRightCircle className={styles.icon} fill="currentColor" />

        <Subhead className={styles.text} weight="2">
          {children}
        </Subhead>
      </Tappable>
    </div>
  );
};
