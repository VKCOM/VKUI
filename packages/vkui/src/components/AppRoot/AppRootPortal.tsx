'use client';

import * as React from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';
import { createPortal } from '../../lib/createPortal';
import { useDOM } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
import type { HasChildren } from '../../types';
import { ColorSchemeProvider } from '../ColorSchemeProvider/ColorSchemeProvider';
import { AppRootContext, type AppRootContextInterface } from './AppRootContext';
import { AppRootStyleContainer } from './AppRootStyleContainer/AppRootStyleContainer';

export interface AppRootPortalProps extends HasChildren {
  /**
   * - При передаче `true` в качестве портала будет использован `portalRoot`
   * из контекста `AppRoot` если он передан в `AppRoot`, иначе `document.body`.
   * - При передаче элемента будут игнорироваться `portalRoot` и `disablePortal` из контекста `AppRoot`.
   *
   * По умолчанию в качестве портала будет использован `document.body`
   */
  usePortal?: boolean | HTMLElement | React.RefObject<HTMLElement | null> | null;
  className?: string;
}

export const AppRootPortal = ({
  children,
  usePortal,
  className,
}: AppRootPortalProps): React.ReactNode => {
  const { mode, disablePortal: disableCreatePortalInGlobalPortalRoot } =
    React.useContext(AppRootContext);
  const colorScheme = useColorScheme();

  const canUsePortal = shouldUsePortal(
    usePortal,
    mode,
    Boolean(disableCreatePortalInGlobalPortalRoot),
  );

  const portalContainer = usePortalContainer(usePortal);

  if (canUsePortal && portalContainer) {
    return createPortal(
      <ColorSchemeProvider value={colorScheme}>
        <AppRootStyleContainer className={className}>{children}</AppRootStyleContainer>
      </ColorSchemeProvider>,
      portalContainer,
    );
  }

  return children;
};

function shouldUsePortal(
  usePortal: AppRootPortalProps['usePortal'],
  mode: AppRootContextInterface['mode'],
  disableCreatePortalInGlobalPortalRoot: boolean,
) {
  if (usePortal === undefined) {
    return disableCreatePortalInGlobalPortalRoot === false && mode !== 'full';
  }

  if (typeof usePortal !== 'boolean') {
    return true;
  }

  return disableCreatePortalInGlobalPortalRoot === false && usePortal === true;
}

function usePortalContainer(usePortal: AppRootPortalProps['usePortal']): HTMLElement | null {
  const { portalRoot: portalRootFromContext } = React.useContext(AppRootContext);

  const { document } = useDOM();

  if (usePortal && typeof usePortal !== 'boolean') {
    return isRefObject(usePortal) ? usePortal.current : usePortal;
  }

  const resolvedPortalFromContext = isRefObject(portalRootFromContext)
    ? portalRootFromContext.current
    : portalRootFromContext;
  // если portalRoot не передали через AppRoot, то мы используем body
  // мы можем использовать body как портал,
  // так как все стили передаются вместе с AppRootStyleContainer
  const portalRoot = resolvedPortalFromContext || document?.body || null;
  return portalRoot;
}
