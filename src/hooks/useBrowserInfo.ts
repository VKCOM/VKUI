import * as React from 'react';
import { SSRContext } from '../lib/SSR';
import { BrowserInfo, computeBrowserInfo } from '../lib/browser';

export function useBrowserInfo(): BrowserInfo {
  const ssrContext = React.useContext(SSRContext);
  const browserInfo = ssrContext.browserInfo ||
    computeBrowserInfo(ssrContext.userAgent);

  return browserInfo;
}
