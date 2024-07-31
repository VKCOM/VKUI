import * as React from 'react';

export type CustomScrollBarController = {
  trackerRef: React.RefObject<HTMLDivElement>;
  trackerVisible: boolean;
  resize: (bar: HTMLDivElement | null) => void;
  dragging: (e: React.MouseEvent) => void;
  dragEnd: () => void;
  scroll: () => void;
  dragStart: (e: React.MouseEvent) => void;
  trackerMouseEnter: () => void;
  trackerMouseLeave: () => void;
};

export type BarHandlers = Pick<CustomScrollBarController, 'resize' | 'scroll'>;

export type ScrollProps = {
  bar: React.MutableRefObject<HTMLDivElement | null>;
  barHandlers: React.MutableRefObject<BarHandlers>;
  boxRef: React.MutableRefObject<HTMLDivElement | null>;
  autoHideScrollbar: boolean;
  autoHideScrollbarDelay?: number;
};
