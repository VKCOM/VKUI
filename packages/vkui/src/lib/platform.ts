import { querystring } from '@vkontakte/vkjs';
import { LiteralUnion } from '../types';
import { BrowserInfo, computeBrowserInfo } from './browser';
import { canUseDOM } from './dom';

export enum Platform {
  ANDROID = 'android',
  IOS = 'ios',
  VKCOM = 'vkcom',
}

/**
 * TODO [>=6]: удалить из VKUI
 *
 * Значение, которое передаётся в качестве query-параметра при открытии VK Mini Apps
 * @see {@link https://dev.vk.com/mini-apps/development/launch-params#vk_platform vk_platform}
 *
 * @deprecated
 */
function getPlatformByQueryString(queryString: string): Platform | undefined {
  const PLATFORM_ALIAS = { desktop_web: Platform.VKCOM };
  const isPlatformAlias = (platformAlias: string): platformAlias is keyof typeof PLATFORM_ALIAS =>
    platformAlias in PLATFORM_ALIAS;
  try {
    const parsedQuery = querystring.parse(queryString);
    const platformAliasByQuery = parsedQuery['vk_platform'];
    return typeof platformAliasByQuery === 'string' && isPlatformAlias(platformAliasByQuery)
      ? PLATFORM_ALIAS[platformAliasByQuery]
      : undefined;
  } catch (e) {
    console.warn(e);
    return;
  }
}

const platformByQueryString = canUseDOM ? getPlatformByQueryString(location.search) : undefined;

export type PlatformType = LiteralUnion<'android' | 'ios' | 'vkcom', string>;

export function platform(browserInfo?: BrowserInfo): PlatformType {
  if (platformByQueryString) {
    return platformByQueryString;
  }

  if (!browserInfo) {
    browserInfo = computeBrowserInfo();
  }

  return browserInfo.system === 'ios' ? Platform.IOS : Platform.ANDROID;
}
