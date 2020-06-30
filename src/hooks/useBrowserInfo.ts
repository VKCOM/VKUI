import { useContext } from 'react';
import { IOS, OSType } from '../lib/platform';
import { SSRContext } from '../lib/SSR';
import { canUseDOM } from '../lib/dom';
import usePlatform from './usePlatform';
import { Version } from '../types';
import { parseiOSVersion } from '../lib/browser';

export interface BrowserInfoInterface {
  userAgent: string;
  platform: OSType;
  platformVersion: Version | null;
}

export function useBrowserInfo(): BrowserInfoInterface {
  const ssrContext = useContext(SSRContext);
  const platform = usePlatform();
  const userAgent = ssrContext.userAgent || (canUseDOM && navigator.userAgent ? navigator.userAgent : '');

  let platformVersion: Version | null;

  if (platform === IOS) {
    platformVersion = parseiOSVersion(userAgent);
  }

  return {
    userAgent,
    platform,
    platformVersion,
  };
}
