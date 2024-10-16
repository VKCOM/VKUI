'use client';

import * as React from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';
import { useIsClient } from '../../hooks/useIsClient';
import { createPortal } from '../../lib/createPortal';
import { isRefObject } from '../../lib/isRefObject';
import type { HasChildren } from '../../types';
import { ColorSchemeProvider } from '../ColorSchemeProvider/ColorSchemeProvider';
import { AppRootContext, type AppRootContextInterface } from './AppRootContext';

export interface AppRootPortalProps extends HasChildren {
  /**
   * - При передаче `true` будет использовать `portalRoot` из контекста `AppRoot`.
   * - При передаче элемента будут игнорироваться `portalRoot` и `disablePortal` из контекста `AppRoot`.
   */
  usePortal?: boolean | HTMLElement | React.RefObject<HTMLElement> | null;
}

export const AppRootPortal = ({ children, usePortal }: AppRootPortalProps): React.ReactNode => {
  const { portalRoot, mode, disablePortal } = React.useContext(AppRootContext);
  const colorScheme = useColorScheme();

  const isClient = useIsClient();
  if (!isClient) {
    return null;
  }

  const portalContainer = resolvePortalContainer(usePortal, portalRoot.current);
  if (!portalContainer || shouldDisablePortal(usePortal, mode, Boolean(disablePortal))) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return createPortal(
    <ColorSchemeProvider value={colorScheme}>{children}</ColorSchemeProvider>,
    portalContainer,
  );
};

function shouldDisablePortal(
  usePortal: AppRootPortalProps['usePortal'],
  mode: AppRootContextInterface['mode'],
  disablePortal: boolean,
) {
  if (usePortal !== undefined) {
    if (typeof usePortal !== 'boolean') {
      return false;
    }
    return disablePortal || usePortal !== true;
  }
  // fallback
  return disablePortal || mode === 'full';
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
