import { LiteralUnion } from '../types';
import { BrowserInfo, computeBrowserInfo } from './browser';

type PlatformUnion = 'android' | 'ios' | 'vkcom';

export const Platform = {
  ANDROID: 'android',
  IOS: 'ios',
  VKCOM: 'vkcom',
} as const;

export type PlatformType = LiteralUnion<PlatformUnion, string>;

export function platform(browserInfo?: BrowserInfo): PlatformUnion {
  if (!browserInfo) {
    browserInfo = computeBrowserInfo();
  }

  return browserInfo.system === 'ios' ? 'ios' : 'android';
}
