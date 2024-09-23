import * as React from 'react';
import { useResizeObserver } from '../../../hooks/useResizeObserver';

export const useOverflowDetector = ({ ref }: { ref: React.RefObject<HTMLElement> }): boolean => {
  const [overflow, setOverflow] = React.useState(false);

  const recalculateOverflow = React.useCallback(() => {
    if (!ref || !ref.current) {
      return;
    }
    setOverflow(
      ref.current.offsetWidth < ref.current.scrollWidth ||
        ref.current.offsetHeight < ref.current.scrollHeight,
    );
  }, [ref]);

  useResizeObserver(ref, recalculateOverflow, {
    forceUseIframe: true,
  });

  React.useEffect(recalculateOverflow, [recalculateOverflow]);

  return overflow;
};
