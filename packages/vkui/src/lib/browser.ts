import { detectIOS, noop } from '@vkontakte/vkjs';
import type { Version } from '../types';

export interface BrowserInfo {
  userAgent: string;
  system: 'ios' | '';
  systemVersion: Version | null;
}

const memoized: { [index: string]: BrowserInfo } = {};

export function computeBrowserInfo(userAgent = ''): BrowserInfo {
  if (memoized[userAgent]) {
    return memoized[userAgent];
  }

  const browserInfo: BrowserInfo = {
    userAgent,
    system: '',
    systemVersion: null,
  };

  const { isIOS, iosMajor, iosMinor } = detectIOS(userAgent);

  if (isIOS) {
    browserInfo.system = 'ios';
    browserInfo.systemVersion = {
      major: iosMajor,
      minor: iosMinor,
    };
  }

  memoized[userAgent] = browserInfo;

  return browserInfo;
}

/**
 * Эмуляция функции `window.matchMedia` для SSR.
 *
 * ⚠️ Желательно избегать использование этой эмуляции в SSR.
 */
export function mediaQueryNull(query: string): MediaQueryList {
  return {
    matches: false,
    media: query,
    onchange: noop,
    addListener: noop,
    removeListener: noop,
    addEventListener: noop,
    removeEventListener: noop,
    dispatchEvent() {
      return false;
    },
  };
}
