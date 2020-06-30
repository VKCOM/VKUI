import React, { createContext, FC } from 'react';
import { OSType, platform } from './platform';

export interface SSRContextInterface {
  platform: OSType;
  userAgent?: string;
}

export const SSRContext = createContext<SSRContextInterface>({
  platform: null,
  userAgent: '',
});

export interface SSRWrapperProps {
  userAgent?: string;
}

export const SSRWrapper: FC<SSRWrapperProps> = (props) => {
  const { userAgent, children } = props;

  // TODO: Каждый раз создаётся новый объект для контекста – плохо
  const contextValue = {
    platform: platform(userAgent),
    userAgent,
  };

  return (
    <SSRContext.Provider value={contextValue}>
      {children}
    </SSRContext.Provider>
  );
};
