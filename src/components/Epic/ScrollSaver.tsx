import { ReactElement, FC } from 'react';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

export interface ScrollSaverProps {
  children: ReactElement;
  initialScroll?: number;
  saveScroll: (scroll: number) => any;
}

export const ScrollSaver: FC<ScrollSaverProps> = ({ children, initialScroll, saveScroll }) => {
  const { window, document } = useDOM();
  useIsomorphicLayoutEffect(() => {
    if (typeof initialScroll === 'number') {
      // Some iOS versions do not normalize scroll — do it manually.
      const safeScroll = Math.max(Math.min(initialScroll, document.body.scrollHeight - window.innerHeight), 0);
      window.scrollTo(0, safeScroll);
    }
    return () => saveScroll(window.pageYOffset);
  }, []);
  return children;
};
