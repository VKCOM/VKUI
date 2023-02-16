import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { ScrollContext } from '../AppRoot/ScrollContext';

export interface ScrollSaverProps {
  initialScroll?: number;
  saveScroll: (this: void, scroll: number) => any;
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ScrollSaver
 */
export const ScrollSaver = ({ children, initialScroll, saveScroll }: ScrollSaverProps) => {
  const { getScroll, scrollTo } = React.useContext(ScrollContext);
  useIsomorphicLayoutEffect(() => {
    if (typeof initialScroll === 'number') {
      scrollTo(0, initialScroll);
    }
    return () => saveScroll(getScroll().y);
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};
