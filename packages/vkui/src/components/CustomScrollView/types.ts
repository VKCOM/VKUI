import * as React from 'react';

export type CustomScrollBarController = {
  trackerRef: React.RefObject<HTMLDivElement>;
  trackerVisible: boolean;
  onResize: (bar: HTMLDivElement | null) => void;
  onMove: (e: React.MouseEvent) => void;
  onUp: () => void;
  onScroll: () => void;
  onDragStart: (e: React.MouseEvent) => void;
  onTrackerMouseEnter: () => void;
  onTrackerMouseLeave: () => void;
};

export type BarHandlers = Pick<CustomScrollBarController, 'onResize' | 'onScroll'>;

export type ScrollProps = {
  bar: React.MutableRefObject<HTMLDivElement | null>;
  barHandlers: React.MutableRefObject<BarHandlers>;
  boxRef: React.MutableRefObject<HTMLDivElement | null>;
  autoHideScrollbar: boolean;
  autoHideScrollbarDelay?: number;
};
