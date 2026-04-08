import * as React from 'react';
import { useDOM } from '../../../lib/dom';
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

    mediaQueries.smallTabletPlus.addEventListener('change', updateIsDesktop);
    mediaQueries.mediumHeight.addEventListener('change', updateIsDesktop);
    pointerFineQuery.addEventListener('change', updateIsDesktop);

    return () => {
      mediaQueries.smallTabletPlus.removeEventListener('change', updateIsDesktop);
      mediaQueries.mediumHeight.removeEventListener('change', updateIsDesktop);
      pointerFineQuery.removeEventListener('change', updateIsDesktop);
    };
  }, [mediaQueries, window]);

  return isDesktop;
}
