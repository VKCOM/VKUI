/* eslint-disable no-restricted-properties */
import * as React from 'react';
import { useDOM } from '../dom';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../matchMedia';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

export const REDUCE_MOTION_MEDIA_QUERY = 'screen and (prefers-reduced-motion: reduce)';

export const useReducedMotion = (): boolean | undefined => {
  const { window } = useDOM();

  const [reducedMotion, setReducedMotion] = React.useState<boolean | undefined>(() => undefined);

  useIsomorphicLayoutEffect(() => {
    /* istanbul ignore if: невозможный кейс (в SSR вызова этой функции не будет) */
    if (!window) {
      return;
    }
    const match = window.matchMedia(REDUCE_MOTION_MEDIA_QUERY);
    setReducedMotion(match.matches);
    /* istanbul ignore next: на текущий момент, покрытие данного кейса неинтересно  */
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      /* istanbul ignore next */
      setReducedMotion(event.matches);
    };
    matchMediaListAddListener(match, handleMediaQueryChange);
    return () => matchMediaListRemoveListener(match, handleMediaQueryChange);
  }, [window]);

  return reducedMotion;
};
