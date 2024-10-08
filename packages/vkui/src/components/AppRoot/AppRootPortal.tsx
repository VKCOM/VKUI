'use client';

import * as React from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';
import { useIsClient } from '../../hooks/useIsClient';
import { createPortal } from '../../lib/createPortal';
import { getDocumentBody } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasChildren } from '../../types';
import { ColorSchemeProvider } from '../ColorSchemeProvider/ColorSchemeProvider';
import { AppRootContext, type AppRootContextInterface } from './AppRootContext';
import { AppRootStyleContainer } from './AppRootStyleContainer';

export interface AppRootPortalProps extends HasChildren {
  /**
   * - При передаче `true` будет использовать `portalRoot` из контекста `AppRoot`.
   * - При передаче элемента будут игнорироваться `portalRoot` и `disablePortal` из контекста `AppRoot`.
   */
  usePortal?: boolean | HTMLElement | React.RefObject<HTMLElement> | null;
}

export const AppRootPortal = ({ children, usePortal }: AppRootPortalProps): React.ReactNode => {
  const { portalRoot, setPortalRoot, appRoot, mode, disablePortal } =
    React.useContext(AppRootContext);
  const colorScheme = useColorScheme();

  const canUsePortal = shouldUsePortal(usePortal, mode, Boolean(disablePortal));

  useIsomorphicLayoutEffect(
    function initializePortalRootIfNeeded() {
      const shouldCreatePortalRoot = canUsePortal && portalRoot.current === null;
      if (shouldCreatePortalRoot) {
        const documentBody = getDocumentBody(appRoot.current);
        const portal = documentBody.ownerDocument.createElement('div');
        documentBody.appendChild(portal);

        setPortalRoot(portal);
      }

      // делать очистку и удалять portalRoot не нужно,
      // так как это произойдёт при размонтировании AppRoot
    },
    [canUsePortal, appRoot, portalRoot, setPortalRoot],
  );

  const isClient = useIsClient();
  if (!isClient) {
    return null;
  }

  const portalContainer = resolvePortalContainer(usePortal, portalRoot.current);
  if (canUsePortal && portalContainer) {
    return createPortal(
      <ColorSchemeProvider value={colorScheme}>
        <AppRootStyleContainer>{children}</AppRootStyleContainer>
      </ColorSchemeProvider>,
      portalContainer,
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};

function shouldUsePortal(
  usePortal: AppRootPortalProps['usePortal'],
  mode: AppRootContextInterface['mode'],
  disablePortal: boolean,
) {
  if (usePortal !== undefined) {
    if (typeof usePortal !== 'boolean') {
      return true;
    }

    return disablePortal === false && usePortal === true;
  }

  return disablePortal === false && mode !== 'full';
}

function resolvePortalContainer<PortalRootFromContext extends HTMLElement | null | undefined>(
  usePortal: AppRootPortalProps['usePortal'],
  portalRootFromContext: PortalRootFromContext,
) {
  if (usePortal === true || !usePortal) {
    return portalRootFromContext ? portalRootFromContext : null;
  }

  return isRefObject(usePortal) ? usePortal.current : usePortal;
}
