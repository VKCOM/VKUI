import React, { FC, useRef, useState } from 'react';
import { HasChildren } from 'types';
import classNames from '../../lib/classNames';
import { noop } from '../../lib/utils';
import { canUseDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
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

  useIsomorphicLayoutEffect(() => {
    rootRef.current.parentElement.classList.add('vkui__root');

    return () => {
      rootRef.current.parentElement.classList.remove('vkui__root');
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!embedded) {
      return noop;
    }

    const parentNode = rootRef.current.parentElement;
    const body = window.document.body;

    // prepare portal root
    const portal = document.createElement('div');
    portal.classList.add('vkui__portal-root');
    body.appendChild(portal);
    setPortalRoot(portal);

    // apply embedded styles
    parentNode.classList.add('vkui__root--embedded');
    applyAdaptivityStyles(parentNode, sizeX);

    return () => {
      cleanupPortalRoots(window);
      setPortalRoot(null);
      parentNode.classList.remove('vkui__root--embedded', 'vkui--sizeX-regular');
    };
  }, [embedded, sizeX]);

  const { body, documentElement } = window.document;
  const globalStylesApplied = useRef(false);
  if (!embedded && canUseDOM && !globalStylesApplied.current) {
    // apply global styles
    documentElement.classList.add('vkui');
    applyAdaptivityStyles(body, sizeX);
    globalStylesApplied.current = true;
  }
  useIsomorphicLayoutEffect(() => () => {
    if (globalStylesApplied.current) {
      documentElement.classList.remove('vkui');
      body.classList.remove('vkui--sizeX-regular');
    }
  });

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
