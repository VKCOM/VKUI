import { createContext } from 'react';

export interface ModalRootContextInterface {
  updateModalHeight: () => void;
}

export const ModalRootContext = createContext<ModalRootContextInterface>({
  updateModalHeight: () => undefined,
});

export default ModalRootContext;
