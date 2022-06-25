import * as React from "react";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { TouchEventHandler } from "../Touch/Touch";

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
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      "onChange" | "onDragStart" | "onDragEnd"
    >,
    HasAlign,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLElement> {
  slideWidth?: string | number;
  slideIndex?: number;
  onDragStart?: TouchEventHandler;
  onDragEnd?: TouchEventHandler;
  onChange?(current: number): void;
  onEnd?({ targetIndex }: { targetIndex: number }): void;
  /**
   * Будет вызвано при клике на кнопку-стрелку влево
   */
  onPrevClick?(): void;
  /**
   * Будет вызвано при клике на кнопку-стрелку вправо
   */
  onNextClick?(): void;
  bullets?: "dark" | "light" | false;
  isDraggable?: boolean;
  showArrows?: boolean;
}
