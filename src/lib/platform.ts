import { canUseDOM } from './dom';

export enum OS {
  ANDROID = 'android',
  IOS = 'ios',
  VKCOM = 'vkcom'
}

export const ANDROID = OS.ANDROID;
export const IOS = OS.IOS;
export const VKCOM = OS.VKCOM;

export type OSType = OS.ANDROID | OS.IOS | OS.VKCOM;

export function platform(useragent?: string): OSType {
  const ua = useragent || canUseDOM && navigator.userAgent || '';

  return /iphone|ipad|ipod/i.test(ua) ? IOS : ANDROID;
}

const osname = platform();

/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
export const IS_PLATFORM_IOS: boolean = osname === IOS;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
export const IS_PLATFORM_ANDROID: boolean = osname === ANDROID;
