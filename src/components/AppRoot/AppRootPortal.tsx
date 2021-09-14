import * as React from 'react';
import { createPortal } from 'react-dom';
import { AppRootContext } from './AppRootContext';

export const AppRootPortal: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  const { portalRoot, embedded } = React.useContext(AppRootContext);
  return embedded && portalRoot
    ? createPortal((<div className={className}>{children}</div>), portalRoot)
    : <React.Fragment>{children}</React.Fragment>;
};
