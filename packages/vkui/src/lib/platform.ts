/**
 * android - базовая платформа
 * ios - платформа которая подстраивается под ios
 * vkcom - платформа предназначенная для миниприложений которые встраиваются в vk.com
 */

import { type BrowserInfo, computeBrowserInfo } from './browser';

export const Platform = {
  ANDROID: 'android',
  IOS: 'ios',
  VKCOM: 'vkcom',
} as const;

export type PlatformType = 'android' | 'ios' | 'vkcom';

export function platform(browserInfo?: BrowserInfo): PlatformType {
  if (!browserInfo) {
    browserInfo = computeBrowserInfo();
  }

  return browserInfo.system === 'ios' ? 'ios' : 'android';
}
