import { canUseDOM } from './dom';

enum OSList {
  ANDROID = 'android',
  IOS = 'ios'
}

export type OS = OSList.ANDROID | OSList.IOS;

export const ANDROID: OS = OSList.ANDROID;
export const IOS: OS = OSList.IOS;

export function platform(useragent?: string): OS {
  const ua = useragent || canUseDOM && navigator.userAgent || '';

  return /android/i.test(ua) ? ANDROID : IOS;
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
