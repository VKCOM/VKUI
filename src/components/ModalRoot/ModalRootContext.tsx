import { createContext } from 'react';

export interface ModalRootContextInterface {
  updateModalHeight: () => void;
}

const ModalRootContext = createContext<ModalRootContextInterface>({
  updateModalHeight: () => undefined,
});

export default ModalRootContext;
