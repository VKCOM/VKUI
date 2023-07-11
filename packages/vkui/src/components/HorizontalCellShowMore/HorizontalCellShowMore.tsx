import React from 'react';
import { Icon28ChevronRightCircle } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { HasRef, HasRootRef, LiteralUnion } from '../../types';
import type { ImageBaseSize } from '../ImageBase/ImageBase';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './HorizontalCellShowMore.module.css';

export interface HorizontalCellShowMoreProps
  extends Omit<TappableProps, 'getRootRef' | 'size'>,
    HasRef<HTMLElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Задаёт высоту компонента. Должeн соответствовать размеру картинок
   * внутри соседних HorizontalCell компонентов.
   *
   * Используйте размеры заданные дизайн-системой `16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 56 | 64 | 72 | 80 | 88 | 96`.
   *
   * > ⚠️ Использование кастомного размера – это пограничный кейс.
   * Игнорируется если `size='s'`.
   */
  height?: LiteralUnion<ImageBaseSize, number>;
  /**
   * Задаёт размер компонента. Аналогичен такому же пропу у [HorizontalCell](https://vkcom.github.io/VKUI/#/HorizontalCellShowMore?id=props).
   * Должен соответствовать значению пропа `size` соседних HorizontalCell.
   */
  size?: 's' | 'm' | 'l';
  /**
   * Предназначен для отрисовки текста.
   * По умолчанию для `size='s'` содержит текст `Все` для других размеров `Показать все`.
   * */
  children?: TappableProps['children'];
  /**
   * Позволяет компенсировать особый правый отступ у предшевствующего последнего элементa HorizontalCell,
   * в том случае, если тот элемент последний в родителе.
   * Если HorizontalCellShowMore находится на одном уровне с остальными HorizontalCell, то этот проп использовать не нужно.
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
  children: childrenProp,
  ...restProps
}: HorizontalCellShowMoreProps) => {
  const children = childrenProp || (size === 's' ? 'Все' : 'Показать все');
  return (
    <div
      style={style}
      className={classNames(
        styles['HorizontalCellShowMore'],
        compensateLastCellIndent && styles['HorizontalCellShowMore--compensate-last-cell-indent'],
        {
          s: styles['HorizontalCellShowMore--size-s'],
          m: styles['HorizontalCellShowMore--size-m'],
          l: styles['HorizontalCellShowMore--size-l'],
        }[size],
        className,
      )}
      ref={getRootRef}
    >
      <div className={styles['HorizontalCellShowMore__in']}>
        <Tappable
          style={{ ...(size === 's' ? {} : { height }) }}
          className={styles['HorizontalCellShowMore__body']}
          getRootRef={getRef}
          activeMode="opacity"
          hoverMode="opacity"
          {...restProps}
        >
          <Icon28ChevronRightCircle
            className={styles['HorizontalCellShowMore__icon']}
            fill="currentColor"
          />

          <Subhead className={styles['HorizontalCellShowMore__text']} weight="2">
            {children}
          </Subhead>
        </Tappable>
      </div>
    </div>
  );
};
