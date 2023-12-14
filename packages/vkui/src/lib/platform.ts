import { BrowserInfo, computeBrowserInfo } from './browser';

export const Platform = {
  ANDROID: 'android',
  IOS: 'ios',
  VKCOM: 'vkcom',
} as const;

/**
 * TODO [>=7]: Переименовать 'vkcom' в 'web' и заменить в DEFAULT_TOKENS_CLASS_NAMES тему по умолчанию
 */
export type PlatformType = 'android' | 'ios' | 'vkcom';

export function platform(browserInfo?: BrowserInfo): PlatformType {
  if (!browserInfo) {
    browserInfo = computeBrowserInfo();
  }

  return browserInfo.system === 'ios' ? 'ios' : 'android';
}
