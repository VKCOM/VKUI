import * as React from 'react';
import { useDOM } from '../lib/dom';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../lib/matchMedia';

/**
 * Хук для определения соответствия медиазапросу
 * @param query - Медиазапрос, например `(min-width: 1024px)` или `(--desktop)`
 * @returns boolean - true если медиазапрос соответствует
 */
export function useMediaQuery(query: string): boolean {
  const { window } = useDOM();
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    if (!window) {
      return;
    }
    if (typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia(query);

    // eslint-disable-next-line no-restricted-properties
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // eslint-disable-next-line no-restricted-properties
    setMatches(mediaQuery.matches);

    matchMediaListAddListener(mediaQuery, handler);

    return () => matchMediaListRemoveListener(mediaQuery, handler);
  }, [query, window]);

  return matches;
}
