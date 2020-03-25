import React from 'react';
import { OSType, platform } from './platform';
import { HasChildren } from '../types';

export interface SSRContextInterface {
  platform: OSType;
}

export const SSRContext: React.Context<SSRContextInterface> = React.createContext({ platform: null });

export interface SSRWrapperProps extends HasChildren {
  userAgent?: string;
}

export const SSRWrapper: React.FunctionComponent<SSRWrapperProps> = ({ userAgent, children }: SSRWrapperProps) =>
  <SSRContext.Provider value={{ platform: platform(userAgent) }}>
    {children}
  </SSRContext.Provider>
;
