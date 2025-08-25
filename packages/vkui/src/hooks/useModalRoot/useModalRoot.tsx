'use client';

import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ModalCard } from '../../components/ModalCard/ModalCard';
import { ModalPage } from '../../components/ModalPage/ModalPage';
import { ModalRoot } from '../../components/ModalRoot/ModalRoot';
import { type ModalRootProps } from '../../components/ModalRoot/types';
import {
  type CustomModalCardItem,
  type CustomModalPayload,
  type ModalRootApi,
  type ModalRootItem,
  type OpenCardReturn,
  type OpenModalCardProps,
  type OpenModalPageProps,
  type OpenPageReturn,
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
      {modals.map((modalData) => {
        switch (modalData.type) {
          case 'custom-page':
          case 'custom-card':
            const Modal = modalData.component;
            return (
              <Modal
                key={modalData.id}
                id={modalData.id}
                modalProps={modalData.modalProps}
                {...modalData.additionalProps}
                update={modalData.update}
                close={modalData.close}
              />
            );
          case 'card':
            return <ModalCard key={modalData.id} {...modalData} />;
          case 'page':
            return <ModalPage key={modalData.id} {...modalData} />;
        }
      })}
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

  const updateModalProps = React.useCallback((id: string, { type, ...props }: ModalRootItem) => {
    setState((oldState) => {
      const { modals } = oldState;
      if ('id' in props) {
        delete props['id'];
      }
      const modalIndex = modals.findIndex((modal) => modal.id === id);
      if (modalIndex === -1) {
        return oldState;
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
                ...props,
              },
            };
          case 'card':
          case 'page':
            return {
              ...currentModal,
              ...props,
            };
        }
      })() as ModalRootItem;
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
    <T extends ModalRootItem>(item: T) => {
      const modalProps: OpenModalPageProps | OpenModalCardProps =
        (item.type === 'custom-card' || item.type === 'custom-page' ? item.modalProps : item) || {};

      const id = modalProps.id || uuidv4();
      setOverlayShowed(true);

      let resolvePromise: () => void;
      const promise = new Promise<void>((resolve) => {
        resolvePromise = resolve;
      });

      const onClose: OpenModalPageProps['onClose'] = (reason, event) => {
        setPrevActiveModal(id);
        modalProps.onClose?.(reason, event);
      };

      const onClosed = () => {
        if (needCloseModals.current.has(id)) {
          removeModal(id);
          needCloseModals.current.delete(id);
          resolvePromise();
        }
        modalProps.onClosed?.();
      };

      const newModalData = (() => {
        switch (item.type) {
          case 'custom-card':
          case 'custom-page':
            return {
              type: item.type,
              id,
              component: item.component,
              additionalProps: item.additionalProps,
              update: item.update,
              close: item.close,
              modalProps: {
                ...item.modalProps,
                id,
                onClose,
                onClosed,
              },
            };
          case 'page':
          case 'card':
            return {
              type: item.type,
              ...modalProps,
              id,
              onClose,
              onClosed,
            };
        }
      })() as ModalRootItem;

      setState((oldState) => {
        if (oldState.modals.find((modal) => modal.id === id)) {
          return oldState;
        }
        return {
          modals: [...oldState.modals, newModalData],
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

  const openModalCard: ModalRootApi['openModalCard'] = React.useCallback(
    (props) => {
      const result: Omit<ReturnType<ModalRootApi['openModalCard']>, 'update'> = open({
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

  const openModalPage: ModalRootApi['openModalPage'] = React.useCallback(
    (props) => {
      const result: Omit<ReturnType<ModalRootApi['openModalPage']>, 'update'> = open({
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

  const openCustomModal: ModalRootApi['openCustomModal'] = React.useCallback(
    (...args) => {
      const [type, props] = args;

      const resolveProps = (rawProps: typeof props) => {
        if ('component' in rawProps) {
          return props;
        }
        return {
          component: props as React.ComponentType,
        };
      };

      if (type === 'card') {
        const {
          id,
          component,
          baseProps: modalProps,
          additionalProps,
        } = resolveProps(props) as CustomModalPayload<OpenModalCardProps>;
        const result: Omit<OpenCardReturn, 'update'> = open<CustomModalCardItem>({
          type: 'custom-card',
          id,
          component,
          additionalProps,
          modalProps: modalProps,
          close: () => result.close(),
          update: (newProps) => update(result.id, 'card', newProps),
        });
        return {
          ...result,
          update: (newProps) => update(result.id, 'card', newProps as any),
        };
      } else {
        const {
          id,
          component,
          baseProps: modalProps,
          additionalProps,
        } = resolveProps(props) as CustomModalPayload<OpenModalPageProps>;
        const result: Omit<OpenPageReturn, 'update'> = open({
          type: 'custom-page',
          id,
          component,
          additionalProps,
          modalProps: modalProps,
          close: () => result.close(),
          update: (newProps) => update(result.id, 'page', newProps),
        });

        return {
          ...result,
          update: (newProps) => update(result.id, 'page', newProps as any),
        };
      }
    },
    [open, update],
  );

  const api: ModalRootApi = React.useMemo(() => {
    return {
      openModalPage,
      openModalCard,
      openCustomModal,
      close,
      update,
      closeAll,
    };
  }, [close, closeAll, openModalCard, openCustomModal, openModalPage, update]);

  const activeModalDisableModalOverlay = React.useMemo(() => {
    if (!state.activeModal) {
      return false;
    }
    const activeModalProps = state.modals.find((modal) => modal.id === state.activeModal);
    if (!activeModalProps) {
      return false;
    }
    return activeModalProps.type === 'custom-card' || activeModalProps.type === 'custom-page'
      ? activeModalProps.modalProps?.disableModalOverlay
      : activeModalProps.disableModalOverlay;
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
