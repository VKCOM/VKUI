/* eslint-disable jsdoc/require-jsdoc */
import type * as React from 'react';
import type { HasAlign, HasRef, HTMLAttributesWithRootRef, LiteralUnion } from '../../types';
import type { ScrollArrowProps } from '../ScrollArrow/ScrollArrow';
import type { CustomTouchEvent, CustomTouchEventHandler } from '../Touch/Touch';
import type { BulletsTestIds } from './Bullets';
import type { ScrollArrowsTestIds } from './ScrollArrows';

export interface GallerySlidesState {
  coordX: number;
  width: number;
}

export interface LayoutState {
  containerWidth: number;
  viewportOffsetWidth: number;
  layerWidth: number;
  min?: number | undefined;
  max: number;
  slides: GallerySlidesState[];
  isFullyVisible: boolean;
}

export interface LoopPoint {
  /**
   * Индекс слайда.
   */
  index: number;
  /**
   * Функция, которая по текущему сдвигу галереи определяет нужный сдвиг слайда.
   */
  target: (this: void, location: number) => void;
}

export interface ControlElementsState {
  /**
   * Отвечает за отображение стрелки влево.
   */
  canSlideLeft: boolean;
  /**
   * Отвечает за отображение стрелки вправо.
   */
  canSlideRight: boolean;
  /**
   * Возможность листать слайды drag'ом.
   */
  isDraggable: boolean;
}

export interface SlidesManagerState {
  /**
   * Общая ширина всех слайдов.
   */
  contentSize: number;
  /**
   * Массив с пограничными точками слайдов, которые необходимо смещать, чтобы они всегда были в области видимости
   * (пример: для последнего слайда это n-первых слайдов, необходимых для заполнения оставшейся ширины,
   * или для первого слайда это n-последних слайдов при выравнивании по центру).
   */
  loopPoints: LoopPoint[];
  /**
   * Массив с правыми границами слайдов.
   */
  snaps: number[];
  /**
   * Ширина видимой области слайдов.
   */
  viewportOffsetWidth: number;
  /**
   * Массив слайдов с координатой начала слайда и шириной.
   */
  slides: GallerySlidesState[];
  /**
   * Все слайды видимы без скрола.
   */
  isFullyVisible: boolean;
  min: number | null;
  max: number | null;
  containerWidth: number;
  layerWidth: number;
}

export type PredefinedEasingType = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type CubicBezierEasingType = [number, number, number, number];

export interface BaseGalleryProps
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
  slideWidth?: LiteralUnion<'custom' | undefined, string> | number | undefined;
  slideIndex?: number | undefined;
  onDragStart?: CustomTouchEventHandler | undefined;
  onDragEnd?: ((e: CustomTouchEvent | undefined, targetIndex: number) => void) | undefined;
  onChange?: ((current: number) => void) | undefined;
  /**
   * Будет вызвано при нажатии на кнопку-стрелку влево.
   */
  onPrevClick?: ((event: React.MouseEvent) => void) | undefined;
  /**
   * Будет вызвано при нажатии на кнопку-стрелку вправо.
   */
  onNextClick?: ((event: React.MouseEvent) => void) | undefined;
  bullets?: 'dark' | 'light' | false | undefined;
  /**
   * Позволяет отключить реагирование на тач-события.
   */
  dragDisabled?: boolean | undefined;
  showArrows?: boolean | undefined;
  /**
   * Размер активной зоны стрелок (в пикселях).
   * Определяет область вокруг стрелок, реагирующую на взаимодействие пользователя. В дизайне свойство называется `arrowArea`.
   */
  arrowAreaHeight?: 'stretch' | 'fit' | undefined;
  hasPointer?: boolean | undefined;
  arrowSize?: ScrollArrowProps['size'] | undefined;
  /**
   * Текст для кнопки-стрелки влево (назад). Делает ее доступной для ассистивных технологий.
   */
  arrowPrevLabel?: string | undefined;
  /**
   * Текст для кнопки-стрелки вправо (вперед). Делает ее доступной для ассистивных технологий.
   */
  arrowNextLabel?: string | undefined;
  /**
   * Текст для слайда. Делает его доступным для ассистивных технологий. Может быть функцией.
   * По умолчанию устанавливает `aria-label` вида `${Номер слайда} из ${Количества слайдов}`.
   */
  slideLabel?: string | ((index: number, slidesCount: number) => string) | undefined;
  /**
   * Описание роли для слайда, для лучше понимания пользователей скринридеров. По умолчанию - `Слайд`.
   */
  slideRoleDescription?: string | undefined;
  /**
   * Передает атрибут `data-testid` для слайда.
   */
  slideTestId?: ((index: number) => string) | undefined;
  /**
   * Включает зацикленность слайдов.
   */
  looped?: boolean | undefined;
  /**
   * Тип источника для отслеживания размера:
   * - `window`: пересчет позиции слайдов будет происходить при изменении размеров `window`
   * - `element`: пересчет позиции слайдов будет происходить при изменении размеров компонента.
   */
  resizeSource?: 'window' | 'element' | undefined;
  /**
   * Длительность анимации смены слайда в миллисекундах.
   */
  animationDuration?: number | undefined;
  /**
   * Функция для анимации.
   *
   * Принимает одно из предопределённых значений или параметры функции [cubic-bezier](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier).
   */
  animationEasing?: PredefinedEasingType | CubicBezierEasingType | undefined;
}
