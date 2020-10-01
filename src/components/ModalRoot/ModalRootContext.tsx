import { createContext } from 'react';

export interface ModalRootContextInterface {
  updateModalHeight: () => void;
  handleModalClose: () => void;
}

export const ModalRootContext = createContext<ModalRootContextInterface>({
  updateModalHeight: () => undefined,
  handleModalClose: () => undefined,
});

export default ModalRootContext;
