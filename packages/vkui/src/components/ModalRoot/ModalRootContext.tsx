import { createContext, useContext, useRef } from 'react';
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

export const ModalRootContext = createContext<ModalRootContextInterface>({
  updateModalHeight: () => undefined,
  registerModal: () => undefined,
  isInsideModal: false,
});

/**
 * All referenced elements must be static
 */
export function useModalRegistry(id: string | undefined, type: ModalType) {
  const modalContext = useContext(ModalRootContext);
  const elements = useRef<ModalElements>({}).current;
  useIsomorphicLayoutEffect(() => {
    if (id !== undefined) {
      modalContext.registerModal({ ...elements, type, id });
      // unset refs on  unmount to prevent leak
      const reset = Object.keys(elements).reduce<ModalRegistryEntry>(
        (acc, k) => ({ ...acc, [k]: null }),
        { type, id },
      );
      return () => modalContext.registerModal(reset);
    }
    return undefined;
  }, []);

  const refs = useRef<Required<ModalRefs>>({
    modalElement: (e) => (elements.modalElement = e),
    innerElement: (e) => (elements.innerElement = e),
    headerElement: (e) => (elements.headerElement = e),
    contentElement: (e) => (elements.contentElement = e),
    bottomInset: (e) => (elements.bottomInset = e),
  }).current;
  return { refs };
}
