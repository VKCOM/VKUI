import * as React from "react";
import { createPortal } from "react-dom";
import { AppRootContext } from "./AppRootContext";
import { AppearanceProvider } from "../AppearanceProvider/AppearanceProvider";
import { useAppearance } from "../../hooks/useAppearance";

export const AppRootPortal: React.FC<
  React.PropsWithChildren<{ className?: string; forcePortal?: boolean }>
> = ({ children, className, forcePortal }) => {
  const { portalRoot, mode } = React.useContext(AppRootContext);
  const appearance = useAppearance();

  forcePortal = forcePortal ?? mode !== "full";
  return portalRoot && forcePortal ? (
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
