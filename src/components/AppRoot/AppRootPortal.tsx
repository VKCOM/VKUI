import * as React from "react";
import { createPortal } from "react-dom";
import { AppRootContext } from "./AppRootContext";
import { AppearanceProvider } from "../AppearanceProvider/AppearanceProvider";
import { useAppearance } from "../../hooks/useAppearance";

export interface AppRootPortalProps {
  className?: string;
  forcePortal?: boolean;
  children?: React.ReactNode;
}

export const AppRootPortal = ({
  children,
  className,
  forcePortal,
}: AppRootPortalProps) => {
  const { portalRoot, mode, disablePortal } = React.useContext(AppRootContext);
  const appearance = useAppearance();

  forcePortal = forcePortal ?? mode !== "full";
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
