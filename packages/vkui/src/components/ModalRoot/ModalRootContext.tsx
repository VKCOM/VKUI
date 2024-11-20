import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { ModalElements, ModalsStateEntry, ModalType } from './types';

export type ModalRegistryEntry = ModalElements & Required<Pick<ModalsStateEntry, 'type' | 'id'>>;
type ModalRefs = { [k in keyof ModalElements]: React.Ref<NonNullable<ModalElements[k]>> };

export interface ModalRootContextInterface {
  updateModalHeight: VoidFunction;
  registerModal: (data: ModalRegistryEntry) => void;
  onClose?: VoidFunction;
  isInsideModal: boolean;
}

export const ModalRootContext: React.Context<ModalRootContextInterface> =
  React.createContext<ModalRootContextInterface>({
    updateModalHeight: () => undefined,
    registerModal: () => undefined,
    isInsideModal: false,
  });

/**
 * All referenced elements must be static
 */
export function useModalRegistry(id: string | undefined, type: ModalType): Required<ModalRefs> {
  const modalContext = React.useContext(ModalRootContext);

  const modalElement = React.useRef<HTMLDivElement>(null);
  const innerElement = React.useRef<HTMLDivElement>(null);
  const headerElement = React.useRef<HTMLDivElement>(null);
  const contentElement = React.useRef<HTMLDivElement>(null);
  const bottomInset = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (id !== undefined) {
      const elements = {
        modalElement: modalElement.current,
        innerElement: innerElement.current,
        headerElement: headerElement.current,
        contentElement: contentElement.current,
        bottomInset: bottomInset.current,
      };

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

  return {
    modalElement,
    innerElement,
    headerElement,
    contentElement,
    bottomInset,
  };
}
