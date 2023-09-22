import { GallerySlidesState } from '../types';

export interface LoopPoint {
  index: number;
  target(this: void, location: number): void;
}

export interface ControlElementsState {
  canSlideLeft: boolean;
  canSlideRight: boolean;
  isDraggable: boolean;
}

export interface SlidesManagerState {
  contentSize: number;
  loopPoints: LoopPoint[];
  snaps: number[];
  viewportOffsetWidth: number;
  slides: GallerySlidesState[];
  isFullyVisible: boolean;
}
