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
   * Настройка портала для рендеринга компонента.
   *
   * `true` - использует `portalRoot` из контекста `AppRoot` (если доступен) или `document.body`;
   * `false` - отключает использование портала;
   * `HTMLElement` - указывает конкретный DOM-элемент для использования в качестве портала;
   * `React.RefObject<HTMLElement | null>` - ссылка на DOM-элемент для использования в качестве портала;
   * `null` - эквивалентно `false`, отключает использование портала.
   *
   * @default true (использует `document.body` как портал по умолчанию)
   */
  usePortal?: boolean | HTMLElement | React.RefObject<HTMLElement | null> | null;
  /**
   * `className` для контейнера портала.
   */
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
