import * as React from 'react';
import { type ModalRootItem } from '../types';
import {
  addModalToState,
  closeAllModals,
  closeModal,
  type ModalRootState,
  removeModalFromState,
  setPrevActiveModal,
  updateModalPropsInState,
} from './modalStateHelpers';

export type UseModalStateReturn = {
  state: ModalRootState;
  needCloseModals: React.RefObject<Set<string>>;
  updateModalProps: (id: string, props: Omit<ModalRootItem, 'type' | 'id'>) => void;
  removeModal: (id: string) => void;
  closeAll: () => void;
  setPrevActive: (id: string) => void;
  close: (id: string) => void;
  addModal: (modalData: ModalRootItem) => void;
  closePrevActiveIfNoHistory: () => void;
};

/**
 * Хук для управления состоянием модалов
 */
export const useModalState = (): UseModalStateReturn => {
  const [state, setState] = React.useState<ModalRootState>({
    activeModal: null,
    modals: [],
  });
  const needCloseModals = React.useRef<Set<string>>(new Set());

  const updateModalProps = React.useCallback(
    (id: string, props: Omit<ModalRootItem, 'type' | 'id'>) => {
      setState((oldState) => updateModalPropsInState(oldState, id, props));
    },
    [],
  );

  const removeModal = React.useCallback((id: string) => {
    setState((oldState) => removeModalFromState(oldState, id));
  }, []);

  const closeAll = React.useCallback(() => {
    setState((oldState) => closeAllModals(oldState, needCloseModals.current));
  }, []);

  const setPrevActive = React.useCallback((id: string) => {
    setState((oldState) => setPrevActiveModal(oldState, id, needCloseModals.current));
  }, []);

  const close = React.useCallback((id: string) => {
    setState((oldState) => closeModal(oldState, id, needCloseModals.current));
  }, []);

  const addModal = React.useCallback((modalData: ModalRootItem) => {
    setState((oldState) => addModalToState(oldState, modalData));
  }, []);

  const closePrevActiveIfNoHistory = React.useCallback(() => {
    setState((oldState) => {
      if (oldState.activeModal) {
        return setPrevActiveModal(oldState, oldState.activeModal, needCloseModals.current);
      }
      return oldState;
    });
  }, []);

  return {
    state,
    needCloseModals,
    updateModalProps,
    removeModal,
    closeAll,
    setPrevActive,
    close,
    addModal,
    closePrevActiveIfNoHistory,
  };
};
