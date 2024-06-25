import * as React from 'react';
import { MEDIA_QUERIES, type MediaQueries } from '../lib/adaptivity';
import { mediaQueryNull } from '../lib/browser';
import { useDOM } from '../lib/dom';

const MediaQueriesCacheContext = React.createContext(new Map<Window | undefined, MediaQueries>());

/**
 * Возвращает медиа выражения определенные дизайн-системой.
 */
export const useMediaQueries = () => {
  const mediaQueriesCache = React.useContext(MediaQueriesCacheContext);
  const { window } = useDOM();

  return React.useMemo<MediaQueries>(
    function initializeStoreOrUpdateStoreIfWindowChanges() {
      const storedMediaQueries = mediaQueriesCache.get(window);
      if (storedMediaQueries) {
        return storedMediaQueries;
      }

      const matchMedia = window ? window.matchMedia.bind(window) : mediaQueryNull;

      const mediaQueries = {
        desktopPlus: matchMedia(MEDIA_QUERIES.DESKTOP_PLUS),
        smallTabletPlus: matchMedia(MEDIA_QUERIES.SMALL_TABLET_PLUS),
        tablet: matchMedia(MEDIA_QUERIES.TABLET),
        smallTablet: matchMedia(MEDIA_QUERIES.SMALL_TABLET),
        mobile: matchMedia(MEDIA_QUERIES.MOBILE),
        mediumHeight: matchMedia(MEDIA_QUERIES.MEDIUM_HEIGHT),
        mobileLandscapeHeight: matchMedia(MEDIA_QUERIES.MOBILE_LANDSCAPE_HEIGHT),
      };

      mediaQueriesCache.set(window, mediaQueries);

      return mediaQueries;
    },
    [mediaQueriesCache, window],
  );
};
