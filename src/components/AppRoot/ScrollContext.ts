import { noop } from '../../lib/utils';
import { createContext } from 'react';

export interface ScrollContextInterface {
  getScroll(): { x: number; y: number };
  scrollTo(x?: number, y?: number): void;
}

export const ScrollContext = createContext<ScrollContextInterface>({
  getScroll: () => ({ x: 0, y: 0 }),
  scrollTo: noop,
});
