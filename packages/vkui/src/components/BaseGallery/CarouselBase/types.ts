export interface LoopPoint {
  index: number;
  target(this: void, location: number): void;
}

export interface ShiftingState {
  contentSize: number;
  loopPoints: LoopPoint[];
  snaps: number[];
}

export interface ControlElementsState {
  canSlideLeft: boolean;
  canSlideRight: boolean;
  isDraggable: boolean;
}
