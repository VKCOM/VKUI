import * as React from 'react';
import { useDOM } from '../../../lib/dom';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../../../lib/matchMedia';
import { useMediaQueries } from '../../useMediaQueries';

/**
 * Хук для определения desktop режима.
 * Desktop: (smallTabletPlus and pointer: fine) or (smallTabletPlus and mediumHeight)
 */
export function useIsDesktop(): boolean {
  const mediaQueries = useMediaQueries();
  const { window } = useDOM();

  const [isDesktop, setIsDesktop] = React.useState(() => {
    // eslint-disable-next-line no-restricted-properties
    const smallTabletPlus = mediaQueries.smallTabletPlus.matches;
    // eslint-disable-next-line no-restricted-properties
    const mediumHeight = mediaQueries.mediumHeight.matches;
    // eslint-disable-next-line no-restricted-properties
    const pointerFine = window?.matchMedia('(pointer: fine)').matches ?? false;
    return smallTabletPlus && (pointerFine || mediumHeight);
  });

  React.useEffect(() => {
    if (!window) {
      return;
    }

    const pointerFineQuery = window.matchMedia('(pointer: fine)');

    const updateIsDesktop = () => {
      // eslint-disable-next-line no-restricted-properties
      const smallTabletPlus = mediaQueries.smallTabletPlus.matches;
      // eslint-disable-next-line no-restricted-properties
      const mediumHeight = mediaQueries.mediumHeight.matches;
      // eslint-disable-next-line no-restricted-properties
      const pointerFine = pointerFineQuery.matches;
      // eslint-disable-next-line no-restricted-properties
      setIsDesktop(smallTabletPlus && (pointerFine || mediumHeight));
    };

    updateIsDesktop();

    matchMediaListAddListener(mediaQueries.smallTabletPlus, updateIsDesktop);
    matchMediaListAddListener(mediaQueries.mediumHeight, updateIsDesktop);
    matchMediaListAddListener(pointerFineQuery, updateIsDesktop);

    return () => {
      matchMediaListRemoveListener(mediaQueries.smallTabletPlus, updateIsDesktop);
      matchMediaListRemoveListener(mediaQueries.mediumHeight, updateIsDesktop);
      matchMediaListRemoveListener(pointerFineQuery, updateIsDesktop);
    };
  }, [mediaQueries, window]);

  return isDesktop;
}
