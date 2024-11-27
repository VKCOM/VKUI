'use client';

import * as React from 'react';
import { ConfigProviderOverride } from '../components/ConfigProvider/ConfigProviderOverride';
import { type BrowserInfo, computeBrowserInfo } from './browser';
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

  return (
    <ConfigProviderOverride platform={getPlatform(browserInfo)}>{children}</ConfigProviderOverride>
  );
};
