import { FC, HTMLAttributes, useRef, useState } from 'react';
import { useDOM } from '../../lib/dom';
import { classNames } from '../../lib/classNames';
import { AppRootContext } from './AppRootContext';
import { withAdaptivity, SizeType, AdaptivityProps } from '../../hoc/withAdaptivity';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';

// Используйте classList, но будьте осторожны
/* eslint-disable no-restricted-properties */

export interface AppRootProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  embedded?: boolean;
  window?: Window;
}

function applyAdaptivityStyles(container: HTMLElement, sizeX: SizeType) {
  if (sizeX === SizeType.REGULAR) {
    container.classList.add('vkui--sizeX-regular');
  } else {
    container.classList.remove('vkui--sizeX-regular');
  }
}

const AppRoot: FC<AppRootProps> = ({ children, embedded, sizeX, hasMouse }) => {
  const rootRef = useRef<HTMLDivElement>();
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement>(null);
  const { window } = useDOM();

  const initialized = useRef(false);

  if (window && !initialized.current && !embedded) {
    window.document.documentElement.classList.add('vkui');
  }

  // one time initialization and cleanup
  useIsomorphicLayoutEffect(() => {
    const doc = window.document.documentElement;
    const body = window.document.body;
    const parentNode = rootRef.current.parentElement;

    let portal: HTMLDivElement;
    if (embedded) {
      portal = document.createElement('div');
      portal.classList.add('vkui__portal-root');
      body.appendChild(portal);
      setPortalRoot(portal);
      parentNode.classList.add('vkui__root', 'vkui__root--embedded');
    } else {
      parentNode.classList.add('vkui__root');
    }

    initialized.current = true;

    return () => {
      if (embedded) {
        parentNode.classList.remove('vkui__root', 'vkui__root--embedded', 'vkui--sizeX-regular');
        portal.parentElement.removeChild(portal);
      } else {
        parentNode.classList.remove('vkui__root');
        body.classList.remove('vkui__root', 'vkui--sizeX-regular');
        doc.classList.remove('vkui');
      }
    };
  }, []);

  // adaptivity handler
  useIsomorphicLayoutEffect(
    () => applyAdaptivityStyles(embedded ? rootRef.current.parentElement : window.document.body, sizeX),
    [sizeX],
  );

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

export default withAdaptivity(AppRoot, {
  sizeX: true,
  hasMouse: true,
});
