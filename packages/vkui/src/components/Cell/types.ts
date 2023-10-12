import * as React from 'react';
import type { TouchEvent } from '../Touch/Touch';

export type Direction = 'up' | 'down';

export type YCoords = { top: number; bottom: number };

export type Item = {
  el: HTMLElement;
  shifted: boolean;
};

export type SwappedItemRange = { from: number; to: number };

export interface UseDraggableProps<T extends HTMLElement = HTMLElement> {
  elRef: React.MutableRefObject<T | null>;
  onDragFinish?(value: SwappedItemRange): void;
}

export interface DraggableProps {
  onDragStart(event: TouchEvent): void;
  onDragEnd(event: TouchEvent): void;
  onDragMove(event: TouchEvent): void;
}

export interface UseDraggable extends DraggableProps {
  dragging: boolean;
}
