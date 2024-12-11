import type * as React from 'react';
import type { HasAlign, HasRef, HTMLAttributesWithRootRef } from '../../types';
import type { ScrollArrowProps } from '../ScrollArrow/ScrollArrow';
import type { CustomTouchEvent, CustomTouchEventHandler } from '../Touch/Touch';
import { type BulletsTestIds } from './Bullets';
import { type ScrollArrowsTestIds } from './ScrollArrows';

export interface GallerySlidesState {
  coordX: number;
  width: number;
}

export interface LayoutState {
  containerWidth: number;
  viewportOffsetWidth: number;
  layerWidth: number;
  min?: number;
  max: number;
  slides: GallerySlidesState[];
  isFullyVisible: boolean;
}

export interface LoopPoint {
  /**
   * Индекс слайда
   */
  index: number;
  /**
   * Функция, которая по текущему сдвигу галереи определяет нужный сдвиг слайда
   */
  target: (this: void, location: number) => void;
}

export interface ControlElementsState {
  /**
   * Отвечает за отображение стрелки влево
   */
  canSlideLeft: boolean;
  /**
   * Отвечает за отображение стрелки вправо
   */
  canSlideRight: boolean;
  /**
   * Возможность листать слайды drag'ом
   */
  isDraggable: boolean;
}

export interface SlidesManagerState {
  /**
   * Общая ширина всех слайдов
   */
  contentSize: number;
  /**
   * Массив с пограничными точками слайдов, которые необходимо смещать, чтобы они всегда были в области видимости
   * (пример: для последнего слайда это n-первых слайдов, необходимых для заполнения оставшейся ширины,
   * или для первого слайда это n-последних слайдов при выравнивании по центру)
   */
  loopPoints: LoopPoint[];
  /**
   * Массив с правыми границами слайдов
   */
  snaps: number[];
  /**
   * Ширина видимой области слайдов
   */
  viewportOffsetWidth: number;
  /**
   * Массив слайдов с координатой начала слайда и шириной
   */
  slides: GallerySlidesState[];
  /**
   * Все слайды видимы без скрола
   */
  isFullyVisible: boolean;
  min: number | null;
  max: number | null;
  containerWidth: number;
  layerWidth: number;
}

export interface BaseGalleryProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange' | 'onDragStart' | 'onDragEnd'>,
    HasAlign,
    HasRef<HTMLElement>,
    BulletsTestIds,
    ScrollArrowsTestIds {
  slideWidth?: string | number;
  slideIndex?: number;
  onDragStart?: CustomTouchEventHandler;
  onDragEnd?: (e: CustomTouchEvent, targetIndex: number) => void;
  onChange?: (current: number) => void;
  /**
   * Будет вызвано при клике на кнопку-стрелку влево
   */
  onPrevClick?: (event: React.MouseEvent) => void;
  /**
   * Будет вызвано при клике на кнопку-стрелку вправо
   */
  onNextClick?: (event: React.MouseEvent) => void;
  bullets?: 'dark' | 'light' | false;
  /**
   * Позволяет отключить реагирование на тач-события
   */
  dragDisabled?: boolean;
  showArrows?: boolean;
  /**
   * Управление размером кликабельной зоны стрелок. В дизайне свойство называется `arrowArea`
   */
  arrowAreaHeight?: 'stretch' | 'fit';
  hasPointer?: boolean;
  arrowSize?: ScrollArrowProps['size'];
  /**
   * Текст для кнопки-стрелки влево (назад). Делает ее доступной для ассистивных технологий
   */
  arrowPrevLabel?: string;
  /**
   * Текст для кнопки-стрелки вправо (вперед). Делает ее доступной для ассистивных технологий
   */
  arrowNextLabel?: string;
  /**
   * Передает атрибут `data-testid` для слайда
   */
  slideTestId?: (index: number) => string;
  /**
   * Включает зацикленность слайдов
   */
  looped?: boolean;
  /**
   * Тип источника для отслеживания размера:
   * - `window`: пересчет позиции слайдов будет происходить при изменении размеров `window`
   * - `element`: пересчет позиции слайдов будет происходить при изменении размеров компонента
   */
  resizeSource?: 'window' | 'element';
}
