import type * as React from 'react';
import { useCallback, useState } from 'react';
import { canUseDOM, noop } from '@vkontakte/vkjs';
import { useMutationObserver } from '../../hooks/useMutationObserver';
import { type GapsProp } from '../../lib/layouts';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

const FLEX_GAP_SUPPORTED = canUseDOM ? CSS.supports('(inset: 0)') : false;

export function useWithGaps(
  containerRef: React.RefObject<HTMLElement | null>,
  gap: GapsProp | undefined,
) {
  const [withGaps, setWithGaps] = useState(false);

  const recalculateWithGaps = useCallback(() => {
    setWithGaps(!!gap && !!containerRef.current && containerRef.current.children.length > 1);
  }, [gap, containerRef]);

  useIsomorphicLayoutEffect(FLEX_GAP_SUPPORTED ? noop : recalculateWithGaps, [recalculateWithGaps]);

  useMutationObserver(FLEX_GAP_SUPPORTED ? null : containerRef, recalculateWithGaps, {
    childList: true,
  });

  return withGaps;
}
