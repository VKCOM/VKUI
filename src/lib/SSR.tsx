import React from 'react';
import { OS, platform } from './platform';
import { HasChildren } from '../types/props';

export interface SSRContextInterface {
  platform: OS
}

export const SSRContext: React.Context<SSRContextInterface> = React.createContext({ platform: null });

export interface SSRWrapperProps extends HasChildren {
  userAgent?: string
}

export const SSRWrapper: React.FunctionComponent<SSRWrapperProps> = ({ userAgent, children }: SSRWrapperProps) => (
  <SSRContext.Provider value={{ platform: platform(userAgent) }}>
    {children}
  </SSRContext.Provider>
);
