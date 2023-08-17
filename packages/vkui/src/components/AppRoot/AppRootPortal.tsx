import * as React from 'react';
import { createPortal } from 'react-dom';
import { useAppearance } from '../../hooks/useAppearance';
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

const useNullableFetch = () => Promise.resolve();

const AppRootPortalWithLazy = ({
  children,
  className,
  forcePortal: forcePortalProp,
  portalRoot: portalRootProp,
}: AppRootPortalProps) => {
  void useNullableFetch();

  const { portalRoot, mode, disablePortal } = React.useContext(AppRootContext);
  const appearance = useAppearance();

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
 * Используем <Suspense>, чтобы компонент рендерился только на клиенте, тем самым избегаем
 * ошибки при гидратации.
 *
 * см. https://react.dev/reference/react/useLayoutEffect#troubleshooting
 *
 * > Note:
 * >
 * > Изначальное решения через useIsClient() не подошло, т.к. из-за двойного рендера у пользователей
 * > нет доступа к ref элемента при useEffect() на первом рендере.
 * >
 * > см. https://github.com/VKCOM/VKUI/issues/5634
 */
export const AppRootPortal = ({ portalRoot = null, ...props }: AppRootPortalProps) => {
  return (
    <React.Suspense fallback={null}>
      <AppRootPortalWithLazy portalRoot={portalRoot} {...props} />
    </React.Suspense>
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
