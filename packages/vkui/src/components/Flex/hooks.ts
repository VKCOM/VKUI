import type * as React from 'react';
import { useCallback, useState } from 'react';
import { useMutationObserver } from '../../hooks/useMutationObserver';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

export function useWithGaps(containerRef: React.RefObject<HTMLElement | null>, disable: boolean) {
  const [withGaps, setWithGaps] = useState(false);

  const recalculateWithGaps = useCallback(() => {
    if (!containerRef.current || disable) {
      setWithGaps(false);
      return;
    }
    setWithGaps(containerRef.current.children.length > 1);
  }, [disable, containerRef]);

  useIsomorphicLayoutEffect(recalculateWithGaps, [recalculateWithGaps]);

  useMutationObserver(disable ? null : containerRef, recalculateWithGaps, {
    childList: true,
  });

  return withGaps;
}
