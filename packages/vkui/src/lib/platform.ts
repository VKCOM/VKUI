import { querystring } from '@vkontakte/vkjs';
import { BrowserInfo, computeBrowserInfo } from './browser';
import { canUseDOM } from './dom';

export enum Platform {
  ANDROID = 'android',
  IOS = 'ios',
  VKCOM = 'vkcom',
}

const PLATFORM_ALIAS = {
  desktop_web: Platform.VKCOM,
};

function isPlatformAlias(platformAlias: string): platformAlias is keyof typeof PLATFORM_ALIAS {
  return platformAlias in PLATFORM_ALIAS;
}

/**
 * Значение, которое передаётся в качестве query-параметра при открытии VK Mini Apps
 * @see {@link https://dev.vk.com/mini-apps/development/launch-params#vk_platform vk_platform}
 */
function getPlatformByQueryString(queryString: string): Platform | undefined {
  try {
    const parsedQuery = querystring.parse(queryString);
    const platformAliasByQuery = parsedQuery['vk_platform'];

    return typeof platformAliasByQuery === 'string' && isPlatformAlias(platformAliasByQuery)
      ? PLATFORM_ALIAS[platformAliasByQuery]
      : undefined;
  } catch (e) {
    console.warn(e);

    return undefined;
  }
}

const platformByQueryString = canUseDOM ? getPlatformByQueryString(location.search) : undefined;

export type PlatformType = Platform.ANDROID | Platform.IOS | Platform.VKCOM | string;

export function platform(browserInfo?: BrowserInfo): PlatformType {
  if (platformByQueryString) {
    return platformByQueryString;
  }

  if (!browserInfo) {
    browserInfo = computeBrowserInfo();
  }

  return browserInfo.system === 'ios' ? Platform.IOS : Platform.ANDROID;
}
