import type * as React from 'react';

export type CustomScrollBarController = {
  barRef: React.RefObject<HTMLDivElement>;
  trackerRef: React.RefObject<HTMLDivElement>;
  trackerVisible: boolean;
  resize: () => void;
  dragging: (e: React.MouseEvent) => void;
  dragEnd: () => void;
  scroll: () => void;
  dragStart: (e: React.MouseEvent) => void;
  trackerMouseEnter: () => void;
  trackerMouseLeave: () => void;
};

export type BarHandlers = Pick<CustomScrollBarController, 'resize' | 'scroll'>;

export type ScrollProps = {
  barHandlers: React.MutableRefObject<BarHandlers | null>;
  boxRef: React.MutableRefObject<HTMLDivElement | null>;
  autoHideScrollbar: boolean;
  autoHideScrollbarDelay?: number;
};
