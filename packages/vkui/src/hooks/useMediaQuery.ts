import * as React from 'react';
import { useDOM } from '../lib/dom';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../lib/matchMedia';

const getMediaQuery = (window: Window | undefined, query: string) => {
  return !!window && typeof window.matchMedia === 'function' ? window.matchMedia(query) : undefined;
};

/**
 * Хук для определения соответствия медиазапросу
 * @param query - Медиазапрос, например `(min-width: 1024px)` или `(--desktop)`
 * @returns boolean - true если медиазапрос соответствует
 */
export function useMediaQuery(query: string): boolean {
  const { window } = useDOM();
  // eslint-disable-next-line no-restricted-properties
  const [matches, setMatches] = React.useState(() => !!getMediaQuery(window, query)?.matches);

  React.useEffect(() => {
    const mediaQuery = getMediaQuery(window, query);
    if (!mediaQuery) {
      return;
    }

    // eslint-disable-next-line no-restricted-properties
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // eslint-disable-next-line no-restricted-properties
    setMatches(mediaQuery.matches);

    matchMediaListAddListener(mediaQuery, handler);

    return () => matchMediaListRemoveListener(mediaQuery, handler);
  }, [query, window]);

  return matches;
}
