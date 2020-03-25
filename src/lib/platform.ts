import { canUseDOM } from './dom';

export enum OS {
  ANDROID = 'android',
  IOS = 'ios',
}

export const ANDROID = OS.ANDROID;
export const IOS = OS.IOS;

export type OSType = OS.ANDROID | OS.IOS;

export function platform(useragent?: string): OSType {
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
