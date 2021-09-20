import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { ModalElements, ModalsStateEntry, ModalType } from './types';

export type ModalRegistryEntry = ModalElements & Required<Pick<ModalsStateEntry, 'type' | 'id'>>;
type ModalRefs = { [k in keyof ModalElements]: (e: ModalElements[k]) => void };

export interface ModalRootContextInterface {
  updateModalHeight: VoidFunction;
  registerModal(data: ModalRegistryEntry): void;
  onClose?: VoidFunction;
  isInsideModal: boolean;
}

export const ModalRootContext = React.createContext<ModalRootContextInterface>({
  updateModalHeight: () => undefined,
  registerModal: () => undefined,
  isInsideModal: false,
});

/**
 * All referenced elements must be static
 */
export function useModalRegistry(id: string, type: ModalType) {
  const modalContext = React.useContext(ModalRootContext);
  const elements = React.useRef<ModalElements>({}).current;
  useIsomorphicLayoutEffect(() => {
    modalContext.registerModal({ ...elements, type, id });
    // unset refs on  unmount to prevent leak
    const reset = Object.keys(elements).reduce<ModalRegistryEntry>(
      (acc, k: keyof ModalElements) => ({ ...acc, [k]: null }),
      { type, id });
    return () => modalContext.registerModal(reset);
  }, []);

  const refs = React.useRef<Required<ModalRefs>>({
    modalElement: (e) => elements.modalElement = e,
    innerElement: (e) => elements.innerElement = e,
    headerElement: (e) => elements.headerElement = e,
    contentElement: (e) => elements.contentElement = e,
    footerElement: (e) => elements.footerElement = e,
  }).current;
  return { refs };
}

export default ModalRootContext;
