'use client';

import * as React from 'react';
import { ConfigProviderOverride } from '../components/ConfigProvider/ConfigProviderOverride';
import { type BrowserInfo, computeBrowserInfo } from './browser';
import { type Direction } from './direction';
import { platform as getPlatform } from './platform';

export interface SSRWrapperProps {
  userAgent?: string;
  browserInfo?: BrowserInfo;
  direction?: Direction;
  children?: React.ReactNode;
}

/**
 * @see https://vkui.io/overview/ssr
 */
export const SSRWrapper: React.FC<SSRWrapperProps> = ({
  userAgent,
  browserInfo,
  direction = 'ltr',
  children,
}) => {
  if (!browserInfo && userAgent) {
    browserInfo = computeBrowserInfo(userAgent);
  }

  return (
    <ConfigProviderOverride direction={direction} platform={getPlatform(browserInfo)}>
      {children}
    </ConfigProviderOverride>
  );
};
