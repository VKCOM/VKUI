import { ControlElementsState, SlidesManagerState } from './types';

export const ANIMATION_DURATION = 240;

export const SLIDE_THRESHOLD = 0.05;

export const CONTROL_ELEMENTS_STATE: ControlElementsState = {
  canSlideLeft: true,
  canSlideRight: true,
  isDraggable: true,
};

export const SLIDES_MANAGER_STATE: SlidesManagerState = {
  viewportOffsetWidth: 0,
  slides: [],
  isFullyVisible: true,
  loopPoints: [],
  contentSize: 0,
  snaps: [],
};
