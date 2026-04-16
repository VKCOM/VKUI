/* eslint-disable no-restricted-properties */
import * as React from 'react';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

type Options = {
  disable?: boolean | undefined;
};

export function useMediaQueryMatches(
  media: string,
  { disable }: Options = {},
): boolean | undefined {
  const { window } = useDOM();

  const [matches, setMatches] = React.useState<boolean | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    if (!window || disable) {
      return;
    }
    const match = window.matchMedia(media);
    setMatches(match.matches);
    /* istanbul ignore next: на текущий момент, покрытие данного кейса неинтересно  */
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      /* istanbul ignore next */
      setMatches(event.matches);
    };
    match.addEventListener('change', handleMediaQueryChange);
    return () => match.removeEventListener('change', handleMediaQueryChange);
  }, [media, window]);

  return matches;
}
