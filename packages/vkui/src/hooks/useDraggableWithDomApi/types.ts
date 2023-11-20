import * as React from 'react';
import type { TouchEvent } from '../../components/Touch/Touch';

export type Direction = 'up' | 'down';

export type DraggingItem = {
  index: number;
  el: HTMLElement;
  draggingElRect: DOMRect;
};

export type PlaceholderItem = {
  index: number;
  el: HTMLElement;
  draggingElRect: DOMRect;
};

export type SiblingItem = {
  index: number;
  el: HTMLElement;
  shifted: boolean;
  draggingElRect: DOMRect;
};

export type SwappedItemRange = { from: number; to: number };

export interface UseDraggableProps<T extends HTMLElement = HTMLElement> {
  elRef: React.MutableRefObject<T | null>;
  onDragFinish?(value: SwappedItemRange): void;
}

export interface DraggableProps {
  onDragStart(this: void, event: TouchEvent): void;
  onDragEnd(this: void, event: TouchEvent): void;
  onDragMove(this: void, event: TouchEvent): void;
}

export interface UseDraggable extends DraggableProps {
  dragging: boolean;
}
