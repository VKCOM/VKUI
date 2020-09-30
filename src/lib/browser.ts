import { Version } from '../types';
import { IOS, OSType, platform } from './platform';

export interface BrowserInfo {
  userAgent: string;
  platform: OSType;
  platformVersion: Version | null;
}

const memoized: { [index: string]: BrowserInfo } = {};

export function computeBrowserInfo(userAgent: string): BrowserInfo {
  if (memoized[userAgent]) {
    return memoized[userAgent];
  }

  const platformName = platform(userAgent);

  let platformVersion: Version | null = null;

  if (platformName === IOS) {
    platformVersion = parseiOSVersion(userAgent);
  }

  const browserInfo: BrowserInfo = {
    userAgent,
    platform: platformName,
    platformVersion,
  };

  memoized[userAgent] = browserInfo;

  return browserInfo;
}

export function parseiOSVersion(userAgent: string): Version | null {
  if (!userAgent) {
    return null;
  }

  const match = userAgent.match(/(iphone os|cpu os|ios) \b([0-9]+_[0-9]+(?:_[0-9]+)?)\b/i);
  if (!match) {
    return null;
  }

  const [major, minor, patch] = match[2].replace(/_/g, '.').split('.');

  return {
    major: parseInt(major, 10) || 0,
    minor: parseInt(minor, 10) || 0,
    patch: parseInt(patch, 10) || 0,
  };
}
