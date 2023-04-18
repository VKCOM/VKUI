import * as React from 'react';
import { createPortal } from 'react-dom';
import { useAppearance } from '../../hooks/useAppearance';
import { useIsClient } from '../../hooks/useIsClient';
import { HasChildren } from '../../types';
import { AppearanceProvider } from '../AppearanceProvider/AppearanceProvider';
import { AppRootContext } from './AppRootContext';

export interface AppRootPortalProps extends HasChildren {
  className?: string;
  forcePortal?: boolean;
}

export const AppRootPortal = ({
  children,
  className,
  forcePortal: forcePortalProp,
}: AppRootPortalProps) => {
  const { portalRoot, mode, disablePortal } = React.useContext(AppRootContext);
  const appearance = useAppearance();

  const isClient = useIsClient();
  if (!isClient) {
    return null;
  }

  const forcePortal = forcePortalProp ?? mode !== 'full';

  return !disablePortal && portalRoot && forcePortal ? (
    createPortal(
      <AppearanceProvider appearance={appearance}>
        <div className={className}>{children}</div>
      </AppearanceProvider>,
      portalRoot,
    )
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};
