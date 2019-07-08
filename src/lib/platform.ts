export const ANDROID = 'android';
export const IOS = 'ios';

let ua: string;
let platformName: typeof ANDROID | typeof IOS;

export function platform (useragent?: string) {
  if (!ua) {
    ua = useragent || (navigator && navigator.userAgent) || '';
  }

  if (!platformName) {
    platformName = /android/i.test(ua) ? ANDROID : IOS;
  }

  return platformName;
}

const osname = platform();

export const IS_PLATFORM_IOS = osname === IOS;
export const IS_PLATFORM_ANDROID = osname === ANDROID;
