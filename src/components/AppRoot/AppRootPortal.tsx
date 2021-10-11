import * as React from 'react';
import { createPortal } from 'react-dom';
import { AppRootContext } from './AppRootContext';
import { ConfigProviderContext } from '../ConfigProvider/ConfigProviderContext';

export const AppRootPortal: React.FC<React.PropsWithChildren<{ className?: string; forcePortal?: boolean }>> = ({ children, className, forcePortal }) => {
  const { portalRoot, mode } = React.useContext(AppRootContext);
  // @ts-ignore
  const { scheme } = React.useContext(ConfigProviderContext);
  forcePortal = typeof forcePortal === 'boolean' ? forcePortal : mode !== 'full';
  return portalRoot && forcePortal
    // @ts-ignore
    ? createPortal((<div className={className} scheme={scheme}>{children}</div>), portalRoot)
    : <React.Fragment>{children}</React.Fragment>;
};
