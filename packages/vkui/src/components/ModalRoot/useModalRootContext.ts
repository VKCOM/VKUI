import { useCallback, useContext } from 'react';
import { ModalRootContext } from './ModalRootContext';
import type { UseModalRootContext } from './types';

export const useModalRootContext = (): UseModalRootContext => {
  const {
    activeModal,
    isInsideModal,
    onClose: onCloseContext,
    updateModalHeight,
    registerModal,
  } = useContext(ModalRootContext);

  const onClose = useCallback(() => {
    if (onCloseContext && activeModal !== null && activeModal !== undefined) {
      onCloseContext(activeModal);
    }
  }, [activeModal, onCloseContext]);

  return { activeModal, isInsideModal, onClose, updateModalHeight, registerModal };
};
