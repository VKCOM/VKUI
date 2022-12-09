import * as React from "react";
import { createPortal } from "react-dom";
import { AppRootContext } from "./AppRootContext";
import { AppearanceProvider } from "../AppearanceProvider/AppearanceProvider";
import { useAppearance } from "../../hooks/useAppearance";
import { useIsClient } from "../../hooks/useIsClient";

export interface AppRootPortalProps {
  className?: string;
  forcePortal?: boolean;
  children?: React.ReactNode;
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

  const forcePortal = forcePortalProp ?? mode !== "full";

  return !disablePortal && portalRoot && forcePortal ? (
    createPortal(
      <AppearanceProvider appearance={appearance}>
        <div className={className}>{children}</div>
      </AppearanceProvider>,
      portalRoot
    )
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};
