/* eslint-disable jsdoc/require-jsdoc */
import type * as React from 'react';
import type { HasAlign, HasRef, HTMLAttributesWithRootRef, LiteralUnion } from '../../types';
import { type BulletsTestIds } from '../CarouselBase/Bullets';
import { type ScrollArrowsTestIds } from '../CarouselBase/ScrollArrows';
import type { ScrollArrowProps } from '../ScrollArrow/ScrollArrow';
import type { CustomTouchEvent, CustomTouchEventHandler } from '../Touch/Touch';

export type PredefinedEasingType = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type CubicBezierEasingType = [number, number, number, number];

export interface BaseCarouselProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange' | 'onDragStart' | 'onDragEnd'>,
    HasAlign,
    HasRef<HTMLElement>,
    BulletsTestIds,
    ScrollArrowsTestIds {
  /**
   * Размер слайда.
   *
   * Значение `"custom"` используется, если ширина у слайдов разная.
   */
  slideWidth?: LiteralUnion<'custom', string> | number;
  slideIndex?: number;
  onDragStart?: CustomTouchEventHandler;
  onDragEnd?: (e: CustomTouchEvent, targetIndex: number) => void;
  onChange?: (current: number) => void;
  /**
   * Будет вызвано при нажатии на кнопку-стрелку влево.
   */
  onPrevClick?: (event: React.MouseEvent) => void;
  /**
   * Будет вызвано при нажатии на кнопку-стрелку вправо.
   */
  onNextClick?: (event: React.MouseEvent) => void;
  bullets?: 'dark' | 'light' | false;
  /**
   * Позволяет отключить реагирование на тач-события.
   */
  dragDisabled?: boolean;
  showArrows?: boolean;
  /**
   * Размер активной зоны стрелок (в пикселях).
   * Определяет область вокруг стрелок, реагирующую на взаимодействие пользователя. В дизайне свойство называется `arrowArea`.
   */
  arrowAreaHeight?: 'stretch' | 'fit';
  arrowSize?: ScrollArrowProps['size'];
  /**
   * Текст для кнопки-стрелки влево (назад). Делает ее доступной для ассистивных технологий.
   */
  arrowPrevLabel?: string;
  /**
   * Текст для кнопки-стрелки вправо (вперед). Делает ее доступной для ассистивных технологий.
   */
  arrowNextLabel?: string;
  /**
   * Текст для слайда. Делает его доступным для ассистивных технологий. Может быть функцией.
   * По умолчанию устанавливает `aria-label` вида `${Номер слайда} из ${Количества слайдов}`.
   */
  slideLabel?: string | ((index: number, slidesCount: number) => string);
  /**
   * Описание роли для слайда, для лучше понимания пользователей скринридеров. По умолчанию - `Слайд`.
   */
  slideRoleDescription?: string;
  /**
   * Передает атрибут `data-testid` для слайда.
   */
  slideTestId?: (index: number) => string;
  /**
   *
   */
  looped?: boolean;

  /**
   * Длительность анимации смены слайда в миллисекундах.
   */
  animationDuration?: number;
  /**
   * Функция для анимации.
   *
   * Принимает одно из предопределённых значений или параметры функции [cubic-bezier](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier).
   */
  animationEasing?: PredefinedEasingType | CubicBezierEasingType;
  /**
   * Тип источника для отслеживания размера:
   * - `window`: пересчет позиции слайдов будет происходить при изменении размеров `window`
   * - `element`: пересчет позиции слайдов будет происходить при изменении размеров компонента.
   */
  resizeSource?: 'window' | 'element';
}
