import * as React from 'react';
import { HasAlign, HasRef, HTMLAttributesWithRootRef } from '../../types';
import { ScrollArrowProps } from '../ScrollArrow/ScrollArrow';
import { TouchEvent, TouchEventHandler } from '../Touch/Touch';

export interface GallerySlidesState {
  coordX: number;
  width: number;
}

export interface ShiftingState {
  deltaX: number;
  shiftX: number;
  animation?: boolean;
  dragging: boolean;
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

export interface BaseGalleryProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange' | 'onDragStart' | 'onDragEnd'>,
    HasAlign,
    HasRef<HTMLElement> {
  slideWidth?: string | number;
  slideIndex?: number;
  onDragStart?: TouchEventHandler;
  onDragEnd?(e: TouchEvent, targetIndex: number): void;
  onChange?(current: number): void;
  /**
   * Будет вызвано при клике на кнопку-стрелку влево
   */
  onPrevClick?(event: React.MouseEvent): void;
  /**
   * Будет вызвано при клике на кнопку-стрелку вправо
   */
  onNextClick?(event: React.MouseEvent): void;
  bullets?: 'dark' | 'light' | false;
  /**
   * Позволяет отключить реагирование на тач-события
   */
  dragDisabled?: boolean;
  showArrows?: boolean;
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
}
