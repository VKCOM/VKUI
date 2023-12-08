import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import type { AppearanceType } from '../lib/appearance';
import { useDOM } from '../lib/dom';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../lib/matchMedia';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

/**
 * @private
 */
export const useAutoDetectAppearance = (appearanceProp?: AppearanceType): AppearanceType => {
  const { window } = useDOM();

  const [appearance, setAppearance] = React.useState<AppearanceType>(
    // @ts-expect-error: TS2345 Из-за SSR мы не можем определять значение по умолчанию, чтобы не было ошибки при гидрации.
    () => {
      return appearanceProp;
    },
  );

  useIsomorphicLayoutEffect(() => {
    if (appearanceProp) {
      setAppearance(appearanceProp);
      return noop;
    }

    const mediaQuery = window ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;

    if (!mediaQuery) {
      return noop;
    }

    const check = (event: MediaQueryList | MediaQueryListEvent) => {
      // eslint-disable-next-line no-restricted-properties
      setAppearance(event.matches ? 'dark' : 'light');
    };
    check(mediaQuery);
    matchMediaListAddListener(mediaQuery, check);
    return () => matchMediaListRemoveListener(mediaQuery, check);
  }, [window, appearanceProp]);

  return appearance;
};
