import { detectIOS } from "@vkontakte/vkjs";
import type { Version } from "../types";
import { noop } from "./utils";

export enum System {
  IOS = "ios",
  UNKNOWN = "",
}

export interface BrowserInfo {
  userAgent: string;
  system: System;
  systemVersion: Version | null;
}

const memoized: { [index: string]: BrowserInfo } = {};

export function computeBrowserInfo(userAgent = ""): BrowserInfo {
  if (memoized[userAgent]) {
    return memoized[userAgent];
  }

  let systemVersion: Version | null = null;
  let system = System.UNKNOWN;

  const { isIOS, iosMajor, iosMinor } = detectIOS(userAgent);

  if (isIOS) {
    system = System.IOS;
    systemVersion = {
      major: iosMajor,
      minor: iosMinor,
    };
  }

  const browserInfo: BrowserInfo = {
    userAgent,
    system,
    systemVersion,
  };

  memoized[userAgent] = browserInfo;

  return browserInfo;
}

/**
 * Эмуляция функции `window.matchMedia` для SSR.
 *
 * ⚠️ Желательно избегать использование этой эмуляции в SSR.
 */
export function mediaQueryNull(query: string): MediaQueryList {
  console.error(`[mediaQueryNull] Похоже вы пытаетесь использовать \`Window.matchMedia()\` API вне браузера.

Во избежание ошибок при гидратации, рекомендуется избегать этого, т.к. при SSR нет информации о размерах экрана.

Используйте CSS Media Query или библиотеку по типу https://github.com/artsy/fresnel.`);
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
