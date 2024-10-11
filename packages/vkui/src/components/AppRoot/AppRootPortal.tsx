'use client';

import * as React from 'react';
import { useAppearance } from '../../hooks/useAppearance';
import { createPortal } from '../../lib/createPortal';
import { getDocumentBody } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasChildren } from '../../types';
import { AppearanceProvider } from '../AppearanceProvider/AppearanceProvider';
import { AppRootContext, type AppRootContextInterface } from './AppRootContext';
import { AppRootStyleContainer } from './AppRootStyleContainer';

export interface AppRootPortalProps extends HasChildren {
  /**
   * - При передаче `true` будет использовать `portalRoot` из контекста `AppRoot`.
   * - При передаче элемента будут игнорироваться `portalRoot` и `disablePortal` из контекста `AppRoot`.
   */
  usePortal?: boolean | HTMLElement | React.RefObject<HTMLElement> | null | 'in-app-after-content';
  className?: string;
}

export const AppRootPortal = ({
  children,
  usePortal,
  className,
}: AppRootPortalProps): React.ReactNode => {
  const { setPortalRoot, appRoot, mode, disablePortal } = React.useContext(AppRootContext);
  const appearance = useAppearance();

  const canUsePortal = shouldUsePortal(usePortal, mode, Boolean(disablePortal));
  const portalContainer = usePortalContainer(usePortal);

  useIsomorphicLayoutEffect(
    // Создаём контейнер для портала по запросу один раз
    // и пока приложение не размонтируется.
    // Удаление созданной ноды происходит в AppRoot
    function initializePortalRootIfNeeded() {
      const shouldCreatePortalRoot = canUsePortal && portalContainer === null;
      if (shouldCreatePortalRoot) {
        const documentBody = getDocumentBody(appRoot.current);
        const portal = documentBody.ownerDocument.createElement('div');
        documentBody.appendChild(portal);

        setPortalRoot(portal);
      }

      // делать очистку и удалять portalRoot не нужно,
      // так как это произойдёт при размонтировании AppRoot
    },
    [canUsePortal, appRoot, portalContainer, setPortalRoot],
  );

  if (canUsePortal && portalContainer) {
    return createPortal(
      <AppearanceProvider value={appearance}>
        <AppRootStyleContainer className={className}>{children}</AppRootStyleContainer>
      </AppearanceProvider>,
      portalContainer,
    );
  }

  return children;
};

function shouldUsePortal(
  usePortal: AppRootPortalProps['usePortal'],
  mode: AppRootContextInterface['mode'],
  disablePortal: boolean,
) {
  if (usePortal === undefined) {
    return disablePortal === false && mode !== 'full';
  }

  if (typeof usePortal !== 'boolean') {
    return true;
  }

  return disablePortal === false && usePortal === true;
}

function usePortalContainer(usePortal: AppRootPortalProps['usePortal']): HTMLElement | null {
  const { portalRoot, popoutModalRoot } = React.useContext(AppRootContext);
  if (typeof usePortal === 'boolean' || usePortal === undefined) {
    return portalRoot.current;
  }

  if (usePortal === 'in-app-after-content') {
    return popoutModalRoot.current;
  }

  return isRefObject(usePortal) ? usePortal.current : usePortal;
}
