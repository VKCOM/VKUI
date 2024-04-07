/* eslint-disable no-restricted-properties */
import * as React from 'react';
import { useDOM } from '../dom';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../matchMedia';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

const REDUCE_MOTION_MEDIA_QUERY = 'screen and (prefers-reduced-motion: reduce)';

export const useReducedMotion = (): boolean => {
  const { window } = useDOM();
  const initial = React.useMemo(
    () => (window ? window.matchMedia(REDUCE_MOTION_MEDIA_QUERY).matches : false),
    [window],
  );
  const reducedMotion = React.useRef(initial);

  useIsomorphicLayoutEffect(() => {
    if (!window) {
      return;
    }
    const match = window.matchMedia(REDUCE_MOTION_MEDIA_QUERY);
    reducedMotion.current = match.matches;
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      reducedMotion.current = event.matches;
    };
    matchMediaListAddListener(match, handleMediaQueryChange);
    return () => matchMediaListRemoveListener(match, handleMediaQueryChange);
  }, [window]);

  return reducedMotion.current;
};
