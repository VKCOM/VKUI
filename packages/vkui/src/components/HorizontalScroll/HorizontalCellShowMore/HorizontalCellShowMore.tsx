import * as React from 'react';
import { Icon28ChevronRightCircle } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { HasRef, HasRootRef, LiteralUnion } from '../../../types';
import type { ImageBaseSize } from '../../ImageBase/ImageBase';
import { Tappable, TappableProps } from '../../Tappable/Tappable';
import { Subhead, SubheadProps } from '../../Typography/Subhead/Subhead';
import styles from './HorizontalCellShowMore.module.css';

const sizeClassNames = {
  s: styles.hostSizeS,
  m: styles.hostSizeM,
  l: styles.hostSizeL,
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
   * По умолчанию для `size='s'` содержит текст `Все` для других размеров `Показать все`.
   * */
  children?: SubheadProps['children'];
  /**
   * Позволяет компенсировать особый правый отступ у предшевствующего элементa `HorizontalCell`,
   * в том случае, если тот элемент последний в родителе.
   * Если `HorizontalCellShowMore` находится на одном уровне с остальными `HorizontalCell`, то этот проп использовать не нужно.
   */
  compensateLastCellIndent?: boolean;
}

export const HorizontalCellShowMore = ({
  className,
  style,
  getRef,
  getRootRef,
  compensateLastCellIndent,
  height,
  size = 's',
  children = size === 's' ? 'Все' : 'Показать все',
  ...restProps
}: HorizontalCellShowMoreProps) => {
  return (
    <div
      style={style}
      className={classNames(
        styles.host,
        compensateLastCellIndent && styles.hostCompensateLastCellIndent,
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
