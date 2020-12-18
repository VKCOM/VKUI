import React, { FC, useEffect, useRef } from 'react';
import { HasChildren } from 'types';
import classNames from '../../lib/classNames';
import { AppRootContext } from './AppRootContext';

export interface AppRootProps extends HasChildren {
  embedded?: boolean;
  window?: Window;
}

export const AppRoot: FC<AppRootProps> = ({ children, embedded, window }) => {
  let portalRoot: HTMLDivElement = null;
  const rootRef = useRef<HTMLDivElement>();

  useEffect(() => {
    rootRef.current.parentElement.classList.add('vkui-root');

    return () => {
      rootRef.current.parentElement.classList.remove('vkui-root');
    };
  }, []);

  useEffect(() => {
    if (embedded) {
      window.document.documentElement.classList.remove('vkui');
    } else {
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
