import { useContext } from 'react';
import { SSRContext } from '../lib/SSR';
import { canUseDOM } from '../lib/dom';
import { BrowserInfo, computeBrowserInfo } from '../lib/browser';

export function useBrowserInfo(): BrowserInfo {
  const ssrContext = useContext(SSRContext);
  const userAgent = ssrContext.userAgent || (canUseDOM && navigator.userAgent ? navigator.userAgent : '');

  return computeBrowserInfo(userAgent);
}
