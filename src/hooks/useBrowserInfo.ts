import { useContext, useMemo } from 'react';
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

function computeBrowserInfo(platform: OSType, userAgent: string): BrowserInfoInterface {
  let platformVersion: Version | null = null;

  if (platform === IOS) {
    platformVersion = parseiOSVersion(userAgent);
  }

  return {
    userAgent,
    platform,
    platformVersion,
  };
}

export function useBrowserInfo(): BrowserInfoInterface {
  const ssrContext = useContext(SSRContext);
  const platform = usePlatform();
  const userAgent = ssrContext.userAgent || (canUseDOM && navigator.userAgent ? navigator.userAgent : '');

  return useMemo(() => {
    return computeBrowserInfo(platform, userAgent);
  }, [computeBrowserInfo, platform, userAgent]);
}
