import { type ModalRootItem } from '../types';

export type ModalRootState = {
  modals: ModalRootItem[];
  activeModal: string | null;
};

/**
 * Удаляет модал из состояния по id
 */
export const removeModalFromState = (state: ModalRootState, id: string): ModalRootState => {
  const { modals } = state;
  const newModals = modals.filter(({ id: modalId }) => id !== modalId);
  return {
    ...state,
    modals: newModals,
  };
};

/**
 * Устанавливает предыдущий активный модал при закрытии текущего
 */
export const setPrevActiveModal = (
  state: ModalRootState,
  id: string,
  needCloseModals: Set<string>,
): ModalRootState => {
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
    activeModal: newActiveModal,
    modals,
  };
};

/**
 * Обновляет пропсы модала
 */
export const updateModalPropsInState = (
  state: ModalRootState,
  id: string,
  props: Omit<ModalRootItem, 'type' | 'id'>,
): ModalRootState => {
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
  })() as ModalRootItem;

  return {
    ...state,
    modals: [...modals.slice(0, modalIndex), newModalProps, ...modals.slice(modalIndex + 1)],
  };
};

/**
 * Закрывает все модалы кроме активного
 */
export const closeAllModals = (
  state: ModalRootState,
  needCloseModals: Set<string>,
): ModalRootState => {
  const { modals, activeModal } = state;
  const newModals = modals.filter(({ id: modalId }) => activeModal === modalId);

  if (activeModal) {
    needCloseModals.add(activeModal);
  }

  return {
    modals: newModals,
    activeModal: null,
  };
};

/**
 * Закрывает модал: если активный - устанавливает предыдущий, иначе просто удаляет
 */
export const closeModal = (
  state: ModalRootState,
  id: string,
  needCloseModals: Set<string>,
): ModalRootState => {
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

/**
 * Добавляет новый модал в состояние
 */
export const addModalToState = (
  state: ModalRootState,
  modalData: ModalRootItem,
): ModalRootState => {
  if (state.modals.find((modal) => modal.id === modalData.id)) {
    return state;
  }

  return {
    modals: [...state.modals, modalData],
    activeModal: modalData.id || null,
  };
};

/**
 * Получает свойство активного модала
 */
export const getActiveModalProp = <T = any>(
  state: ModalRootState,
  propGetter: (modal: ModalRootItem) => T | undefined,
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
