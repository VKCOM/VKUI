import { type ModalManagerItem } from '../types';

export type ModalManagerState = {
  modals: ModalManagerItem[];
  activeModal: string | null;
  overlayShowed: boolean;
};

export const setOverlayShowedInState = (
  state: ModalManagerState,
  overlayShowed: boolean,
): ModalManagerState => {
  if (state.overlayShowed === overlayShowed) {
    return state;
  }
  return {
    ...state,
    overlayShowed,
  };
};

export const removeModalFromState = (state: ModalManagerState, id: string): ModalManagerState => {
  const { modals } = state;
  const newModals = modals.filter(({ id: modalId }) => id !== modalId);
  return {
    ...state,
    modals: newModals,
  };
};

export const setPrevActiveModal = (
  state: ModalManagerState,
  id: string,
  needCloseModals: Set<string>,
): ModalManagerState => {
  const { modals, activeModal } = state;
  let newActiveModal = activeModal;

  needCloseModals.add(id);

  const activeModalIndex = modals.findIndex(({ id: modalId }) => id === modalId);
  if (activeModal === id && activeModalIndex === modals.length - 1) {
    if (modals.length === 1) {
      newActiveModal = null;
    } else {
      newActiveModal = modals[activeModalIndex - 1].id || null;
    }
  }

  return {
    ...state,
    activeModal: newActiveModal,
    modals,
  };
};

export const updateModalPropsInState = (
  state: ModalManagerState,
  id: string,
  props: Omit<ModalManagerItem, 'type' | 'id'>,
): ModalManagerState => {
  const { modals } = state;

  const cleanProps = { ...props };
  if ('id' in cleanProps) {
    delete cleanProps['id'];
  }

  const modalIndex = modals.findIndex((modal) => modal.id === id);
  if (modalIndex === -1) {
    return state;
  }

  const currentModal = modals[modalIndex];
  const newModalProps = (() => {
    switch (currentModal.type) {
      case 'custom-page':
      case 'custom-card':
        return {
          ...currentModal,
          modalProps: {
            ...currentModal.modalProps,
            ...cleanProps,
          },
        };
      case 'card':
      case 'page':
        return {
          ...currentModal,
          ...cleanProps,
        };
    }
  })() as ModalManagerItem;

  return {
    ...state,
    modals: [...modals.slice(0, modalIndex), newModalProps, ...modals.slice(modalIndex + 1)],
  };
};

export const closeAllModals = (
  state: ModalManagerState,
  needCloseModals: Set<string>,
): ModalManagerState => {
  const { modals, activeModal } = state;
  const newModals = modals.filter(({ id: modalId }) => activeModal === modalId);

  if (activeModal) {
    needCloseModals.add(activeModal);
  }

  return {
    ...state,
    modals: newModals,
    activeModal: null,
  };
};

/**
 * Закрывает модал: если активный - устанавливает предыдущий, иначе просто удаляет
 */
export const closeModal = (
  state: ModalManagerState,
  id: string,
  needCloseModals: Set<string>,
): ModalManagerState => {
  const { activeModal } = state;

  if (!activeModal) {
    return state;
  }

  if (activeModal === id) {
    return setPrevActiveModal(state, activeModal, needCloseModals);
  } else {
    return removeModalFromState(state, id);
  }
};

export const addModalToState = (
  state: ModalManagerState,
  modalData: ModalManagerItem,
): ModalManagerState => {
  if (state.modals.find((modal) => modal.id === modalData.id)) {
    return state;
  }

  return {
    ...state,
    modals: [...state.modals, modalData],
    activeModal: modalData.id || null,
  };
};

export const getActiveModalProp = <T = any>(
  state: ModalManagerState,
  propGetter: (modal: ModalManagerItem) => T | undefined,
): T | undefined => {
  if (!state.activeModal) {
    return undefined;
  }

  const activeModalProps = state.modals.find((modal) => modal.id === state.activeModal);
  if (!activeModalProps) {
    return undefined;
  }

  return propGetter(activeModalProps);
};
