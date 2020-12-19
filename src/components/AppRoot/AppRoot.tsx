import React, { FC, useEffect, useRef, useState } from 'react';
import { HasChildren } from 'types';
import classNames from '../../lib/classNames';
import { AppRootContext } from './AppRootContext';
import withAdaptivity, { SizeType, AdaptivityProps } from '../../hoc/withAdaptivity';

export interface AppRootProps extends HasChildren, AdaptivityProps {
  embedded?: boolean;
  window?: Window;
}

function cleanupPortalRoots(window: Window) {
  const portalRoots = window.document.querySelector('.vkui-portal-root');
  if (portalRoots) {
    window.document.body.removeChild(portalRoots);
  }
}

const AppRoot: FC<AppRootProps> = ({ children, embedded, window, sizeX }) => {
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
      cleanupPortalRoots(window);

      window.document.documentElement.classList.add('vkui');

      if (sizeX === SizeType.REGULAR) {
        window.document.body.classList.add('vkui-sizeX-regular');
      } else {
        window.document.body.classList.remove('vkui-sizeX-regular');
      }
    }

    return () => {
      if (embedded) {
        cleanupPortalRoots(window);
      }
    };
  }, [embedded, sizeX]);

  return (
    <div ref={rootRef} className={classNames('AppRoot', {
      'AppRoot--embedded': embedded,
      'AppRoot--sizeX-regular': sizeX === SizeType.REGULAR,
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

export default withAdaptivity(AppRoot, { sizeX: true });
