import { useContext } from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasChildren } from '../../types';
import { ScrollContext } from '../AppRoot/ScrollContext';

export interface ScrollSaverProps extends HasChildren {
  initialScroll?: number;
  saveScroll: (this: void, scroll: number) => any;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ScrollSaver
 */
export const ScrollSaver = ({ children, initialScroll, saveScroll }: ScrollSaverProps) => {
  const { getScroll, scrollTo } = useContext(ScrollContext);
  useIsomorphicLayoutEffect(() => {
    if (typeof initialScroll === 'number') {
      scrollTo(0, initialScroll);
    }
    return () => saveScroll(getScroll().y);
  }, []);
  return <>{children}</>;
};
