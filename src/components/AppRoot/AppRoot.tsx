import React, { FC, useEffect, useRef, useState } from 'react';
import { HasChildren } from 'types';
import classNames from '../../lib/classNames';
import { AppRootContext } from './AppRootContext';

export interface AppRootProps extends HasChildren {
  embedded?: boolean;
  window?: Window;
}

export const AppRoot: FC<AppRootProps> = ({ children, embedded, window }) => {
  const rootRef = useRef<HTMLDivElement>();
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement>(null);

  useEffect(() => {
    rootRef.current.parentElement.classList.add('vkui-root');

    return () => {
      rootRef.current.parentElement.classList.remove('vkui-root');
    };
  }, []);

  useEffect(() => {
    if (embedded) {
      const portal = document.createElement('div');
      portal.classList.add('vkui-portal-root');
      window.document.body.appendChild(portal);
      setPortalRoot(portal);

      window.document.documentElement.classList.remove('vkui');
    } else {
      setPortalRoot(null);
      const portalRoots = window.document.querySelector('.vkui-portal-root');
      if (portalRoots) {
        window.document.body.removeChild(portalRoots);
      }

      window.document.documentElement.classList.add('vkui');
    }
  }, [embedded]);

  return (
    <div ref={rootRef} className={classNames('AppRoot', {
      'AppRoot--embedded': embedded,
    })}>
      <AppRootContext.Provider value={{
        appRoot: rootRef,
        portalRoot: portalRoot,
        embedded,
      }}>
        {embedded ? (
          <div className="AppRoot__wrapper">
            {children}
          </div>
        ) : children}
      </AppRootContext.Provider>
    </div>
  );
};

AppRoot.defaultProps = {
  window: window,
};

export default AppRoot;
