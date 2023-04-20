export type DraggingType = 'start' | 'end';

export type SliderBaseValue = [number, number | null];

export interface GestureRef {
  dragging: DraggingType | null;
  startX: number;
  containerWidth: number;
}
