'use client';

import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ModalCard } from '../../components/ModalCard/ModalCard';
import { ModalPage } from '../../components/ModalPage/ModalPage';
import { ModalRoot } from '../../components/ModalRoot/ModalRoot';
import { type ModalRootProps } from '../../components/ModalRoot/types';
import {
  type ModalRootApi,
  type ModalRootItem,
  type UseModalRootProps,
  type UseModalRootReturn,
} from './types';

type ContextHolderProps = Omit<ModalRootProps, 'activeModal' | 'children'> & {
  modals: ModalRootItem[];
  activeModal: string | null;
};

function ContextHolder({ modals, ...modalRootProps }: ContextHolderProps) {
  return (
    <ModalRoot {...modalRootProps}>
      {modals.map((modalProps) =>
        modalProps.type === 'card' ? (
          <ModalCard key={modalProps.id} {...modalProps} />
        ) : (
          <ModalPage key={modalProps.id} {...modalProps} />
        ),
      )}
    </ModalRoot>
  );
}

type ModalRootState = { modals: ModalRootItem[]; activeModal: string | null };

export const useModalRoot = (props: UseModalRootProps = {}): UseModalRootReturn => {
  const [state, setState] = React.useState<ModalRootState>({
    activeModal: null,
    modals: [],
  });
  const [overlayShowed, setOverlayShowed] = React.useState(false);
  const needCloseModals = React.useRef<Set<string>>(new Set());

  const removeModalImpl = (oldState: ModalRootState, id: string) => {
    const { modals } = oldState;
    const newModals = modals.filter(({ id: modalId }) => id !== modalId);
    return {
      ...oldState,
      modals: newModals,
    };
  };

  const updateModalProps = React.useCallback((id: string, props: ModalRootItem) => {
    setState((oldState) => {
      const { modals } = oldState;
      if ('id' in props) {
        delete props['id'];
      }
      const modalIndex = modals.findIndex((modal) => modal.id === id);
      if (modalIndex === -1) {
        return oldState;
      }
      const newModalProps: ModalRootItem = Object.assign(modals[modalIndex], props);
      return {
        ...oldState,
        modals: modals
          .slice(0, modalIndex)
          .concat([newModalProps])
          .concat(modals.slice(modalIndex + 1)),
      };
    });
  }, []);

  const removeModal = React.useCallback((id: string) => {
    setState((oldState) => removeModalImpl(oldState, id));
  }, []);

  const closeAll = React.useCallback(() => {
    setState((oldState) => {
      const { modals, activeModal } = oldState;
      const newModals = modals.filter(({ id: modalId }) => activeModal === modalId);
      activeModal && needCloseModals.current.add(activeModal);
      return {
        modals: newModals,
        activeModal: null,
      };
    });
  }, []);

  const setPrevActiveModalImpl = (oldState: ModalRootState, id: string) => {
    const { modals, activeModal } = oldState;
    let newActiveModal = activeModal;

    needCloseModals.current.add(id);

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

  const setPrevActiveModal = React.useCallback((id: string) => {
    setState((oldState) => setPrevActiveModalImpl(oldState, id));
  }, []);

  const close = React.useCallback((id: string) => {
    setState((oldState) => {
      const { activeModal } = oldState;
      if (!activeModal) {
        return oldState;
      }
      if (activeModal === id) {
        return setPrevActiveModalImpl(oldState, activeModal);
      } else {
        return removeModalImpl(oldState, id);
      }
    });
  }, []);

  const open = React.useCallback(
    <T extends ModalRootItem>(props: T) => {
      const id = props.id || uuidv4();
      setOverlayShowed(true);

      let resolvePromise: () => void;
      const promise = new Promise<void>((resolve) => {
        resolvePromise = resolve;
      });

      setState((oldState) => {
        if (oldState.modals.find((modal) => modal.id === id)) {
          return oldState;
        }
        return {
          modals: [
            ...oldState.modals,
            {
              ...props,
              id,
              onClose: (reason, event) => {
                setPrevActiveModal(id);
                props.onClose?.(reason, event);
              },
              onClosed: () => {
                if (needCloseModals.current.has(id)) {
                  removeModal(id);
                  needCloseModals.current.delete(id);
                  resolvePromise();
                }
                props.onClosed?.();
              },
            },
          ],
          activeModal: id,
        };
      });
      return {
        id,
        close: () => close(id),
        onClose: <R,>(resolve?: () => R) => {
          return promise.then(resolve);
        },
      };
    },
    [close, removeModal, setPrevActiveModal],
  );

  const update: ModalRootApi['update'] = React.useCallback(
    (...args) => {
      const [id, type, props] = args;

      if (type === 'card') {
        updateModalProps(id, {
          type: 'card',
          ...props,
        });
      } else {
        updateModalProps(id, {
          type: 'page',
          ...props,
        });
      }
    },
    [updateModalProps],
  );

  const openCard: ModalRootApi['openCard'] = React.useCallback(
    (props) => {
      const result: Omit<ReturnType<ModalRootApi['openCard']>, 'update'> = open({
        ...props,
        type: 'card',
      });
      return {
        ...result,
        update: (newProps) => update(result.id, 'card', newProps),
      };
    },
    [open, update],
  );

  const openPage: ModalRootApi['openPage'] = React.useCallback(
    (props) => {
      const result: Omit<ReturnType<ModalRootApi['openPage']>, 'update'> = open({
        ...props,
        type: 'page',
      });
      return {
        ...result,
        update: (newProps) => update(result.id, 'page', newProps),
      };
    },
    [open, update],
  );

  const api: ModalRootApi = React.useMemo(() => {
    return {
      openPage,
      openCard,
      close,
      update,
      closeAll,
    };
  }, [close, closeAll, openCard, openPage, update]);

  const activeModalDisableModalOverlay = React.useMemo(() => {
    if (!state.activeModal) {
      return false;
    }
    const activeModalProps = state.modals.find((modal) => modal.id === state.activeModal);
    if (!activeModalProps) {
      return false;
    }
    return activeModalProps.disableModalOverlay || false;
  }, [state.activeModal, state.modals]);

  const disableModalOverlay = props.disableModalOverlay || activeModalDisableModalOverlay;

  const contextHolder: React.ReactElement | null = React.useMemo(() => {
    const onOverlayClosed = () => {
      setOverlayShowed(false);
      props.onOverlayClosed?.();
    };

    return state.modals.length || (!disableModalOverlay && overlayShowed) ? (
      <ContextHolder
        {...props}
        disableModalOverlay={disableModalOverlay}
        modals={state.modals}
        activeModal={state.activeModal}
        onOverlayClosed={onOverlayClosed}
      />
    ) : null;
  }, [state.modals, state.activeModal, disableModalOverlay, overlayShowed, props]);

  return [api, contextHolder];
};
