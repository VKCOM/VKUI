import { ReactElement } from 'react';
import { FrameProps, withFrame } from '../../hoc/withFrame';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

export interface ScrollSaverProps extends FrameProps {
  children: ReactElement;
  initialScroll?: number;
  saveScroll: (scroll: number) => any;
}

export const ScrollSaver = withFrame(({ children, initialScroll, saveScroll, window, document }: ScrollSaverProps) => {
  useIsomorphicLayoutEffect(() => {
    if (typeof initialScroll === 'number') {
      // Some iOS versions do not normalize scroll — do it manually.
      const safeScroll = Math.max(Math.min(initialScroll, document.body.scrollHeight - window.innerHeight), 0);
      window.scrollTo(0, safeScroll);
    }
    return () => saveScroll(window.pageYOffset);
  }, []);
  return children;
});
