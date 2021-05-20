import { FC, HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';
import { useDOM } from '../../lib/dom';
import { classNames } from '../../lib/classNames';
import { AppRootContext } from './AppRootContext';
import { withAdaptivity, SizeType, AdaptivityProps } from '../../hoc/withAdaptivity';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { elementScrollController, globalScrollController, ScrollContext, ScrollContextInterface } from './ScrollContext';

// Используйте classList, но будьте осторожны
/* eslint-disable no-restricted-properties */

export interface AppRootProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  embedded?: boolean;
  window?: Window;
  scroll?: 'global' | 'contain';
}

function applyAdaptivityStyles(container: HTMLElement, sizeX: SizeType) {
  if (sizeX === SizeType.REGULAR) {
    container.classList.add('vkui--sizeX-regular');
  } else {
    container.classList.remove('vkui--sizeX-regular');
  }
}

const AppRoot: FC<AppRootProps> = ({ children, embedded, sizeX, hasMouse, scroll = 'global', ...props }) => {
  const rootRef = useRef<HTMLDivElement>();
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement>(null);
  const { window, document } = useDOM();

  const initialized = useRef(false);

  if (!initialized.current) {
    if (window && !embedded) {
      document.documentElement.classList.add('vkui');
    }
  }

  useEffect(() => {
    if (scroll !== 'global' && !embedded) {
      console.warn('[VKUI/AppRoot] Scroll modes only supported in embedded mode');
    }
  }, [scroll]);

  // one time initialization and cleanup
  useIsomorphicLayoutEffect(() => {
    const doc = document.documentElement;
    const body = document.body;
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
    () => applyAdaptivityStyles(embedded ? rootRef.current.parentElement : document.body, sizeX),
    [sizeX],
  );

  const scrollController = useMemo<ScrollContextInterface>(
    () => scroll === 'contain' ? elementScrollController(rootRef) : globalScrollController(window, document),
    [scroll]);

  return (
    <div ref={rootRef} vkuiClass={classNames('AppRoot', {
      'AppRoot--no-mouse': !hasMouse,
    })} {...props}>
      <AppRootContext.Provider value={{
        appRoot: rootRef,
        portalRoot: portalRoot,
        embedded,
      }}>
        <ScrollContext.Provider value={scrollController}>
          {children}
        </ScrollContext.Provider>
      </AppRootContext.Provider>
    </div>
  );
};

export default withAdaptivity(AppRoot, {
  sizeX: true,
  hasMouse: true,
});
