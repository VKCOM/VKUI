import { canUseDOM } from './dom';

export enum OS {
  ANDROID = 'android',
  IOS = 'ios'
}

export const ANDROID: OS = OS.ANDROID;
export const IOS: OS = OS.IOS;

export function platform(useragent?: string): OS {
  const ua = useragent || (canUseDOM && navigator.userAgent) || '';

  return /android/i.test(ua) ? ANDROID : IOS;
}

// @TODO выпилить в 3.0.0
/**
 * @deprecated будет удалено в 3.0.0, так как для SSR нужно определять osname не один раз при запуске, а на каждый
 * запрос.
 */
const osname = platform();

/**
 * @deprecated будет удалено в 3.0.0, используйте platform() === OS.IOS
 */
export const IS_PLATFORM_IOS: boolean = osname === IOS;
/**
 * @deprecated будет удалено в 3.0.0, используйте platform() === OS.ANDROID
 */
export const IS_PLATFORM_ANDROID: boolean = osname === ANDROID;
