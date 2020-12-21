import { useContext } from 'react';
import { SSRContext } from '../lib/SSR';
import { BrowserInfo, computeBrowserInfo } from '../lib/browser';

export function useBrowserInfo(): BrowserInfo {
  const ssrContext = useContext(SSRContext);
  const browserInfo = ssrContext.browserInfo ||
    computeBrowserInfo(ssrContext.userAgent);

  return browserInfo;
}
