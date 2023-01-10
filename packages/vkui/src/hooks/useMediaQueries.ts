import * as React from 'react';
import { type MediaQueries, MEDIA_QUERIES } from '../lib/adaptivity';
import { mediaQueryNull } from '../lib/browser';
import { useDOM } from '../lib/dom';

interface StoredMediaQueries {
  /**
   * Постоянная ссылка на окно. Это необходима, чтобы пересоздать медиа выражение если окно вдруг измениться.
   *
   * > `styleguide`
   * >
   * > В данный момент изменения окна существует в рамках песочницы. По сути мы храним ссылку на окно ради этого кейса
   * > в песочнице.
   */
  window: Window | undefined;
  /**
   * Хранит созданные медиа выражения.
   *
   * Достаточно единожды создать экземпляры `MediaQueryList`, а дальше подписываться на события
   * через метод `addEventListener(type, listener)`.
   *
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList}
   */
  mediaQueries: MediaQueries | null;
}

const storedMediaQueries: StoredMediaQueries = {
  window: undefined,
  mediaQueries: null,
};

/**
 * Возвращает медиа выражения определенные дизайн-системой.
 */
export const useMediaQueries = () => {
  const { window } = useDOM();

  return React.useMemo(
    function initializeStoreOrUpdateStoreIfWindowChanges() {
      if (storedMediaQueries.window === window && storedMediaQueries.mediaQueries !== null) {
        return storedMediaQueries.mediaQueries;
      }

      const matchMedia = window ? window.matchMedia.bind(window) : mediaQueryNull;

      storedMediaQueries.window = window;
      storedMediaQueries.mediaQueries = {
        desktopPlus: matchMedia(MEDIA_QUERIES.DESKTOP_PLUS),
        smallTabletPlus: matchMedia(MEDIA_QUERIES.SMALL_TABLET_PLUS),
        tablet: matchMedia(MEDIA_QUERIES.TABLET),
        smallTablet: matchMedia(MEDIA_QUERIES.SMALL_TABLET),
        mobile: matchMedia(MEDIA_QUERIES.MOBILE),
        mediumHeight: matchMedia(MEDIA_QUERIES.MEDIUM_HEIGHT),
        mobileLandscapeHeight: matchMedia(MEDIA_QUERIES.MOBILE_LANDSCAPE_HEIGHT),
      };

      return storedMediaQueries.mediaQueries;
    },
    [window],
  );
};
