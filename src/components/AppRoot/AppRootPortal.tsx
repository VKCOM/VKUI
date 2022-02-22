import * as React from "react";
import { createPortal } from "react-dom";
import { AppRootContext } from "./AppRootContext";

export const AppRootPortal: React.FC<
  React.PropsWithChildren<{ className?: string; forcePortal?: boolean }>
> = ({ children, className, forcePortal }) => {
  const { portalRoot, mode } = React.useContext(AppRootContext);

  forcePortal = forcePortal ?? mode !== "full";
  return portalRoot && forcePortal ? (
    createPortal(<div className={className}>{children}</div>, portalRoot)
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};
