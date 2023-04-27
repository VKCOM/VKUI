export type InternalValueState = [number, number | null];

export type InternalDraggingType = 'start' | 'end';

export interface InternalGestureRef {
  dragging: InternalDraggingType | null;
  startX: number;
  containerWidth: number;
}
