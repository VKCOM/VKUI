import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Skeleton.module.css';

export interface SkeletonProps extends HTMLAttributesWithRootRef<HTMLDivElement | HTMLSpanElement> {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  inlineSize?: React.CSSProperties['inlineSize'];
  blockSize?: React.CSSProperties['blockSize'];
  maxWidth?: React.CSSProperties['maxWidth'];
  maxInlineSize?: React.CSSProperties['maxInlineSize'];
  borderRadius?: React.CSSProperties['borderRadius'];

  /**
   * Сделает скелетон круглым. Имеет более высокий приоритет над `borderRadius`
   */
  circle?: boolean;

  /**
   * Начальный цвет анимации
   */
  colorFrom?: string;

  /**
   * Финальный цвет анимации
   */
  colorTo?: string;

  /**
   * Выключает анимацию, в результате чего показывается только один цвет
   */
  noAnimation?: boolean;

  /**
   * Длительность анимации в секундах
   */
  duration?: number;
}

/**
 * Старайтесь минимизировать количество заглушек на экране. Не каждый элемент
 * на экране должен заменяться заглушкой.
 *
 * Текстовые блоки лучше сокращать до трёх строк. Ширина последней строки
 * скелета вычисляется, как 75% от ширины текстового блока. Высота скелетона
 * автоматически подстраивается под размер шрифта, поэтому идеально
 * вписывается в слоты компонентов, которые обычно ожидают текст.
 *
 * @since 6.1.0
 */
export const Skeleton = ({
  width,
  height,
  inlineSize,
  blockSize,
  maxWidth,
  maxInlineSize,
  borderRadius,
  circle,
  style,
  children,
  colorFrom,
  colorTo,
  noAnimation,
  duration,
  ...restProps
}: SkeletonProps) => {
  const skeletonStyle: React.CSSProperties & CSSCustomProperties = {
    width,
    height,
    inlineSize,
    blockSize,
    maxWidth,
    maxInlineSize,
    borderRadius: circle ? '50%' : borderRadius,
  };

  if (colorFrom) {
    skeletonStyle['--vkui_internal--skeleton_color_from'] = colorFrom;
  }

  if (colorTo) {
    skeletonStyle['--vkui_internal--skeleton_color_to'] = colorTo;
  }

  if (Number.isFinite(duration)) {
    skeletonStyle['--vkui_internal--skeleton_animation_duration'] = `${duration}s`;
  }

  return (
    <RootComponent
      Component="span"
      baseClassName={classNames(
        styles['Skeleton'],
        noAnimation && styles['Skeleton--disableAnimation'],
      )}
      style={{ ...skeletonStyle, ...style }}
      {...restProps}
    >
      {children || <>&zwnj;</>}
    </RootComponent>
  );
};
