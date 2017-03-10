export const ANDROID = 'android';
export const IOS = 'ios';

let ua;
let platformName;

export function platform (useragent) {
  if (!ua) {
    ua = useragent || (navigator && navigator.userAgent) || '';
  }
  if (!platformName) {
    platformName = /android/i.test(ua) ? ANDROID : IOS;
  }

  return platformName;
}
