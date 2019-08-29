enum OS {
  ANDROID = 'android',
  IOS = 'ios'
}

export const ANDROID: OS = OS.ANDROID;
export const IOS: OS = OS.IOS;

let ua: string;
let platformName: OS;

export function platform (useragent?: string): OS {
  if (!ua) {
    ua = useragent || (navigator && navigator.userAgent) || '';
  }
  if (!platformName) {
    platformName = /android/i.test(ua) ? ANDROID : IOS;
  }

  return platformName;
}

const osname = platform();

export const IS_PLATFORM_IOS: boolean = osname === IOS;
export const IS_PLATFORM_ANDROID: boolean = osname === ANDROID;
