import * as React from "react";
import { noop } from "../../lib/utils";

export interface ModalRootContextInterface {
  updateModalHeight: VoidFunction;
  isInsideModal: boolean;
  onClose?: VoidFunction;
  setMaskOpacity?: (opacity: number, animate?: boolean) => void;
  mode?: "desktop" | "mobile";
}

export const ModalRootContext = React.createContext<ModalRootContextInterface>({
  updateModalHeight: noop,
  isInsideModal: false,
});

export default ModalRootContext;
