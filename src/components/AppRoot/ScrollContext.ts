import * as React from 'react';
import { noop } from '../../lib/utils';
import { clamp } from '../../helpers/math';

export interface ScrollContextInterface {
  getScroll(): { x: number; y: number };
  scrollTo(x?: number, y?: number): void;
}

export const ScrollContext = React.createContext<ScrollContextInterface>({
  getScroll: () => ({ x: 0, y: 0 }),
  scrollTo: noop,
});

export const globalScrollController = (window: Window, document: HTMLDocument) => ({
  getScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
  scrollTo: (x = 0, y = 0) => {
    // Some iOS versions do not normalize scroll — do it manually.
    window.scrollTo(
      x ? clamp(x, 0, document.body.scrollWidth - window.innerWidth) : 0,
      y ? clamp(y, 0, document.body.scrollHeight - window.innerHeight) : 0);
  },
});

export const elementScrollController = (elRef: React.RefObject<HTMLElement>) => ({
  getScroll: () => ({ x: elRef.current.scrollLeft, y: elRef.current.scrollTop }),
  scrollTo: (x = 0, y = 0) => {
    const el = elRef.current;
    // Some iOS versions do not normalize scroll — do it manually.
    el.scrollTo(
      x ? clamp(x, 0, el.scrollWidth - el.clientWidth) : 0,
      y ? clamp(y, 0, el.scrollHeight - el.clientHeight) : 0);
  },
});
