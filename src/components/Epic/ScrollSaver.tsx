import { ReactElement } from 'react';
import { FrameProps, withFrame } from '../../hoc/withFrame';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

export interface ScrollSaverProps extends FrameProps {
  children: ReactElement;
  initialScroll?: number;
  saveScroll: (scroll: number) => any;
}

export const ScrollSaver = withFrame(({ children, initialScroll, saveScroll, window }: ScrollSaverProps) => {
  useIsomorphicLayoutEffect(() => {
    if (typeof initialScroll === 'number') {
      window.scrollTo(0, initialScroll);
    }
    return () => saveScroll(window.pageYOffset);
  }, []);
  return children;
});
