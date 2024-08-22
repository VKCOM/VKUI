import * as React from 'react';
import { ConfigProviderOverride } from '../components/ConfigProvider/ConfigProviderOverride';
import { useObjectMemo } from '../hooks/useObjectMemo';
import { type BrowserInfo, computeBrowserInfo } from './browser';
import { DOMContext, getDOM } from './dom';
import { platform as getPlatform } from './platform';

export interface SSRWrapperProps {
  userAgent?: string;
  browserInfo?: BrowserInfo;
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SSR
 */
export const SSRWrapper: React.FC<SSRWrapperProps> = ({ userAgent, browserInfo, children }) => {
  if (!browserInfo && userAgent) {
    browserInfo = computeBrowserInfo(userAgent);
  }

  const dom = useObjectMemo(getDOM());

  return (
    <ConfigProviderOverride platform={getPlatform(browserInfo)}>
      <DOMContext.Provider value={dom}>{children}</DOMContext.Provider>
    </ConfigProviderOverride>
  );
};
