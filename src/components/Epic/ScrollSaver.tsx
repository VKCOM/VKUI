import { ScrollContext } from '../AppRoot/ScrollContext';
import { ReactElement, FC, useContext } from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

export interface ScrollSaverProps {
  children: ReactElement;
  initialScroll?: number;
  saveScroll: (scroll: number) => any;
}

export const ScrollSaver: FC<ScrollSaverProps> = ({ children, initialScroll, saveScroll }) => {
  const { getScroll, scrollTo } = useContext(ScrollContext);
  useIsomorphicLayoutEffect(() => {
    if (typeof initialScroll === 'number') {
      scrollTo(0, initialScroll);
    }
    return () => saveScroll(getScroll().y);
  }, []);
  return children;
};
