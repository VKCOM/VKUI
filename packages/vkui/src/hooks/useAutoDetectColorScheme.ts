import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { ColorScheme, type ColorSchemeType } from '../lib/colorScheme';
import { useDOM } from '../lib/dom';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../lib/matchMedia';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

/**
 * @private
 */
export const useAutoDetectColorScheme = (colorSchemeProp?: ColorSchemeType): ColorSchemeType => {
  const { window } = useDOM();

  const [colorScheme, setColorScheme] = React.useState<ColorSchemeType>(
    colorSchemeProp || ColorScheme.LIGHT,
  );

  useIsomorphicLayoutEffect(() => {
    if (colorSchemeProp) {
      setColorScheme(colorSchemeProp);
      return noop;
    }

    const mediaQuery = window ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;

    if (!mediaQuery) {
      return noop;
    }

    const check = (event: MediaQueryList | MediaQueryListEvent) => {
      // eslint-disable-next-line no-restricted-properties
      setColorScheme(event.matches ? ColorScheme.DARK : ColorScheme.LIGHT);
    };
    check(mediaQuery);
    matchMediaListAddListener(mediaQuery, check);
    return () => matchMediaListRemoveListener(mediaQuery, check);
  }, [window, colorSchemeProp]);

  return colorScheme;
};
