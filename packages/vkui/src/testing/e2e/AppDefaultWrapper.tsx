import * as React from 'react';
import { AppRoot, type AppRootProps } from '../../components/AppRoot/AppRoot';

export type AppWrapperProps = AppRootProps;

export const AppDefaultWrapper = ({ children, ...restProps }: AppWrapperProps) => (
  <AppRoot mode="embedded" {...restProps}>
    <div
      style={{
        border: '8px solid var(--playwright-border)',
        background: 'var(--playwright-background)',
      }}
    >
      {children}
    </div>
  </AppRoot>
);
