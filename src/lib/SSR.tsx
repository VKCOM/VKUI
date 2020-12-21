import React, { createContext, FC } from 'react';
import { PlatformType, platform } from './platform';
import { BrowserInfo, computeBrowserInfo } from './browser';

export interface SSRContextInterface {
  platform: PlatformType;
  userAgent?: string;
  browserInfo?: BrowserInfo;
}

export const SSRContext = createContext<SSRContextInterface>({
  platform: null,
  userAgent: '',
  browserInfo: undefined,
});

export interface SSRWrapperProps {
  userAgent?: string;
  browserInfo?: BrowserInfo;
}

export const SSRWrapper: FC<SSRWrapperProps> = (props) => {
  let { userAgent, browserInfo, children } = props;

  if (!browserInfo && userAgent) {
    browserInfo = computeBrowserInfo(userAgent);
  }

  // TODO: Каждый раз создаётся новый объект для контекста – плохо
  const contextValue = {
    platform: platform(browserInfo),
    browserInfo,
    userAgent,
  };

  return (
    <SSRContext.Provider value={contextValue}>
      {children}
    </SSRContext.Provider>
  );
};
