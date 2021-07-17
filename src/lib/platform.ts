import { BrowserInfo, computeBrowserInfo } from './browser';
import { querystring } from '@vkontakte/vkjs';
import { canUseDOM } from './dom';

export enum Platform {
  ANDROID = 'android',
  IOS = 'ios',
  VKCOM = 'vkcom'
}

function mapVKPlatform(vkPlatform: string): Platform {
  switch (vkPlatform) {
    case 'desktop_web':
      return Platform.VKCOM;
    case 'mobile_ipad':
    case 'mobile_iphone':
    case 'mobile_iphone_messenger':
      return Platform.IOS;
    default:
      return Platform.ANDROID;
  }
}

export const ANDROID = Platform.ANDROID;
export const IOS = Platform.IOS;
export const VKCOM = Platform.VKCOM;

export type PlatformType = Platform.ANDROID | Platform.IOS | Platform.VKCOM;

export function platform(browserInfo?: BrowserInfo): PlatformType {
  /* Значение, которое передаётся в качестве query-параметра при открытии VK Mini Apps */
  let vkPlatform = canUseDOM ? querystring.parse(window.location.search).vk_platform : undefined;

  if (typeof vkPlatform === 'string') {
    return mapVKPlatform(vkPlatform);
  }

  if (!browserInfo) {
    browserInfo = computeBrowserInfo();
  }

  return browserInfo.system === 'ios' ? IOS : ANDROID;
}

const platformName = platform();

/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
export const IS_PLATFORM_IOS: boolean = platformName === IOS;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
export const IS_PLATFORM_ANDROID: boolean = platformName === ANDROID;
