import React, { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { AppRootContext } from './AppRootContext';

export const AppRootPortal: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <AppRootContext.Consumer>
      {({ modalRoot }) => {
        return modalRoot ? createPortal((
          <div className={className}>
            {children}
          </div>
        ), modalRoot) : children;
      }}
    </AppRootContext.Consumer>
  );
};
