import * as React from "react";

export interface AppRootContextInterface {
  appRoot?: React.RefObject<HTMLDivElement>;
  portalRoot?: HTMLDivElement | null;
  embedded?: boolean;
  mode?: "partial" | "embedded" | "full";
  keyboardInput?: boolean;
}

export const AppRootContext = React.createContext<AppRootContextInterface>({
  portalRoot: null,
});
