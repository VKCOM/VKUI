import * as React from "react";

export interface SplitLayoutContextInterface {
  setPopout(popout: React.ReactNode): void;
  setModal(modal: React.ReactNode): void;
  setHeader(header: React.ReactNode): void;
}

export const SplitLayoutContext = React.createContext<
  SplitLayoutContextInterface | undefined
>(undefined);
