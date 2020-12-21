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
  const portalRoots = window.document.querySelector('.vkui__portal-root');
  if (portalRoots) {
    window.document.body.removeChild(portalRoots);
  }
}

function applyAdaptivityStyles(container: HTMLElement, sizeX: SizeType) {
  if (sizeX === SizeType.REGULAR) {
    container.classList.add('vkui--sizeX-regular');
  } else {
    container.classList.remove('vkui--sizeX-regular');
  }
}

const AppRoot: FC<AppRootProps> = ({ children, embedded, window, sizeX, hasMouse }) => {
  const rootRef = useRef<HTMLDivElement>();
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement>(null);

  useEffect(() => {
    rootRef.current.parentElement.classList.add('vkui__root');

    return () => {
      rootRef.current.parentElement.classList.remove('vkui__root');
    };
  }, []);

  useEffect(() => {
    const parentNode = rootRef.current.parentElement;
    const doc = window.document.documentElement;
    const body = window.document.body;

    if (embedded) {
      // prepare portal root
      const portal = document.createElement('div');
      portal.classList.add('vkui__portal-root');
      body.appendChild(portal);
      setPortalRoot(portal);

      // apply embedded styles
      parentNode.classList.add('vkui__root--embedded');

      // cleanup possible previous state
      doc.classList.remove('vkui');
      body.classList.remove('vkui--sizeX-regular');

      applyAdaptivityStyles(parentNode, sizeX);
    } else {
      // apply global styles
      doc.classList.add('vkui');

      // cleanup possible previous state
      setPortalRoot(null);
      cleanupPortalRoots(window);
      parentNode.classList.remove('vkui__root--embedded');
      parentNode.classList.remove('vkui--sizeX-regular');

      applyAdaptivityStyles(body, sizeX);
    }

    return () => {
      if (embedded) {
        cleanupPortalRoots(window);
      }
    };
  }, [embedded, sizeX]);

  return (
    <div ref={rootRef} className={classNames('AppRoot', {
      'AppRoot--no-mouse': !hasMouse,
    })}>
      <AppRootContext.Provider value={{
        appRoot: rootRef,
        portalRoot: portalRoot,
        embedded,
      }}>
        {children}
      </AppRootContext.Provider>
    </div>
  );
};

AppRoot.defaultProps = {
  window: window,
};

export default withAdaptivity(AppRoot, {
  sizeX: true,
  hasMouse: true,
});
