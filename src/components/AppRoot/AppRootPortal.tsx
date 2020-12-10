import React, { FC, PropsWithChildren, useContext } from 'react';
import { createPortal } from 'react-dom';
import { AppRootContext } from './AppRootContext';

export const AppRootPortal: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  const { portalRoot, embedded } = useContext(AppRootContext);
  return embedded && portalRoot
    ? createPortal((<div className={className}>{children}</div>), portalRoot)
    : <>{children}</>;
};
