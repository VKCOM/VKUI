import { createContext } from 'react';

export interface ModalRootContextInterface {
  updateModalHeight: VoidFunction;
  onClose?: VoidFunction;
  isInsideModal: boolean;
}

export const ModalRootContext = createContext<ModalRootContextInterface>({
  updateModalHeight: () => undefined,
  isInsideModal: false,
});

export default ModalRootContext;
