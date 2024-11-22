'use client';

import * as React from 'react';
import { useColorScheme } from '../../hooks/useColorScheme';
import { createPortal } from '../../lib/createPortal';
import { useDOM } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
import type { HasChildren } from '../../types';
import { ColorSchemeProvider } from '../ColorSchemeProvider/ColorSchemeProvider';
import { AppRootContext, type AppRootContextInterface } from './AppRootContext';
import { AppRootStyleContainer } from './AppRootStyleContainer';

export interface AppRootPortalProps extends HasChildren {
  /**
   * - При передаче `true` будет использовать `portalRoot` из контекста `AppRoot`.
   * - При передаче элемента будут игнорироваться `portalRoot` и `disablePortal` из контекста `AppRoot`.
   * - При передаче `SplitLayout` будет использоваться контейнер внутри `SplitLayout`, сразу после контента приложения.
   *   Если контейнера `SplitLayout` в приложении нет, то будет использован глобальный `portalRoot`, чаще всего
   *   это последний дочерний элемент `body`.
   */
  usePortal?: boolean | HTMLElement | React.RefObject<HTMLElement> | null | 'SplitLayout';
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
  const { portalRoot: portalRootFromContext, popoutModalRoot } = React.useContext(AppRootContext);

  const { document } = useDOM();

  // если portalRoot не передали, то мы используем body
  // мы можем использовать body как портал,
  // так как все стили передаются вместе с AppRootStyleContainer
  const portalRoot = portalRootFromContext || document?.body || null;

  if (typeof usePortal === 'boolean' || usePortal === undefined) {
    return portalRoot;
  }

  if (usePortal === 'SplitLayout') {
    return popoutModalRoot.current || portalRoot;
  }

  return isRefObject(usePortal) ? usePortal.current : usePortal;
}
