"use client";

import { type ModalRootItem } from "../types";
import {
  addModalToState,
  closeAllModals,
  closeModal,
  type ModalRootState,
  removeModalFromState,
  setOverlayShowedInState,
  setPrevActiveModal,
  updateModalPropsInState,
} from "./modalStateHelpers";

export type ModalStore = {
  getState: () => ModalRootState;
  subscribe: (listener: () => void) => () => void;
  needCloseModals: Set<string>;
  addModal: (modalData: ModalRootItem) => void;
  removeModal: (id: string) => void;
  updateModalProps: (
    id: string,
    props: Omit<ModalRootItem, "type" | "id">
  ) => void;
  closeModal: (id: string) => void;
  closeAll: () => void;
  setPrevActive: (id: string) => void;
  closePrevActiveIfNoHistory: () => void;
  setOverlayShowed: (value: boolean) => void;
};

export const createModalStore = (): ModalStore => {
  let state: ModalRootState = {
    activeModal: null,
    modals: [],
    overlayShowed: false,
  };
  const listeners = new Set<() => void>();
  const needCloseModals = new Set<string>();

  const notify = () => {
    listeners.forEach((listener) => listener());
  };

  const setState = (updater: (oldState: ModalRootState) => ModalRootState) => {
    const newState = updater(state);
    if (newState !== state) {
      state = newState;
      notify();
    }
  };

  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    needCloseModals,
    addModal: (modalData) => {
      setState((oldState) => addModalToState(oldState, modalData));
    },
    removeModal: (id) => {
      setState((oldState) => removeModalFromState(oldState, id));
    },
    updateModalProps: (id, props) => {
      setState((oldState) => updateModalPropsInState(oldState, id, props));
    },
    closeModal: (id) => {
      setState((oldState) => closeModal(oldState, id, needCloseModals));
    },
    closeAll: () => {
      setState((oldState) => closeAllModals(oldState, needCloseModals));
    },
    setPrevActive: (id) => {
      setState((oldState) => setPrevActiveModal(oldState, id, needCloseModals));
    },
    closePrevActiveIfNoHistory: () => {
      setState((oldState) => {
        if (oldState.activeModal) {
          return setPrevActiveModal(
            oldState,
            oldState.activeModal,
            needCloseModals
          );
        }
        return oldState;
      });
    },
    setOverlayShowed: (value) => {
      setState((oldState) => setOverlayShowedInState(oldState, value));
    },
  };
};
