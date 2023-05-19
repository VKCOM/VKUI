import * as React from 'react';
import { createPortal } from 'react-dom';
import { useAppearance } from '../../hooks/useAppearance';
import { useIsClient } from '../../hooks/useIsClient';
import { isRefObject } from '../../lib/isRefObject';
import { HasChildren } from '../../types';
import { AppearanceProvider } from '../AppearanceProvider/AppearanceProvider';
import { AppRootContext } from './AppRootContext';

export interface AppRootPortalProps extends HasChildren {
  className?: string;
  forcePortal?: boolean;
  /**
   * Кастомный root-элемент портала.
   * При передаче вместе с `forcePorta=true` игнорируется `portalRoot` и `disablePortal`
   * из контекста `AppRoot`.
   */
  portalRoot?: HTMLElement | React.RefObject<HTMLElement> | null;
}

export const AppRootPortal = ({
  children,
  className,
  forcePortal: forcePortalProp,
  portalRoot: portalRootProp = null,
}: AppRootPortalProps) => {
  const { portalRoot, mode, disablePortal } = React.useContext(AppRootContext);
  const appearance = useAppearance();

  const isClient = useIsClient();
  if (!isClient) {
    return null;
  }

  const forcePortal = forcePortalProp ?? mode !== 'full';

  const portalContainer = getPortalContainer(portalRootProp, portalRoot);

  const ignoreDisablePortalFlagFromContext = portalRootProp && forcePortal;
  const shouldUsePortal = ignoreDisablePortalFlagFromContext
    ? true
    : !disablePortal && portalContainer && forcePortal;

  return shouldUsePortal && portalContainer ? (
    createPortal(
      <AppearanceProvider appearance={appearance}>
        <div className={className}>{children}</div>
      </AppearanceProvider>,
      portalContainer,
    )
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

/**
 * Получает из кастомного пропа `partialRootProp` и `partialRoot` контекста
 * контейнер-элемент для портала.
 * `partialRootProp` может быть ref элементом.
 *
 */
function getPortalContainer(
  portalRootProp?: HTMLElement | React.RefObject<HTMLElement> | null,
  portalRoot?: HTMLElement | null,
) {
  if (!portalRootProp) {
    return portalRoot;
  }

  return isRefObject(portalRootProp) ? portalRootProp.current : portalRootProp;
}
