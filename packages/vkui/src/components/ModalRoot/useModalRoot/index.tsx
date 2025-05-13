'use client';

import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ModalCard } from '../../ModalCard/ModalCard';
import { ModalPage } from '../../ModalPage/ModalPage';
import { ModalRoot } from '../ModalRoot';
import { type ModalRootProps } from '../types';
import {
  type ModalRootApi,
  type ModalRootItem,
  type UseModalRootProps,
  type UseModalRootReturn,
} from './types';

/* eslint-disable jsdoc/require-jsdoc */

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

export const useModalRoot = (props: UseModalRootProps): UseModalRootReturn => {
  const [state, setState] = React.useState<ModalRootState>({
    activeModal: null,
    modals: [],
  });
  const [overlayShowed, setOverlayShowed] = React.useState(false);
  const needCloseModals = React.useRef<Set<string>>(new Set());

  const removeModalImpl = (oldState: ModalRootState, id: string) => {
    const { modals, activeModal } = oldState;
    const newModals = modals.filter(({ id: modalId }) => id !== modalId);
    return {
      activeModal,
      modals: newModals,
    };
  };

  const updateModalProps = React.useCallback((id: string, props: ModalRootItem) => {
    setState((oldState) => {
      const { modals, activeModal } = oldState;
      if ('id' in props) {
        delete props['id'];
      }
      const modalIndex = modals.findIndex((modal) => modal.id === id);
      if (modalIndex === -1) {
        return oldState;
      }
      const newModalProps: ModalRootItem = Object.assign(modals[modalIndex], props);
      return {
        modals: modals
          .slice(0, modalIndex)
          .concat([newModalProps])
          .concat(modals.slice(modalIndex + 1)),
        activeModal,
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
        then: <R,>(resolve: () => R) => {
          return promise.then(resolve);
        },
      };
    },
    [close, removeModal, setPrevActiveModal],
  );

  const openCard: ModalRootApi['openCard'] = React.useCallback(
    (props) => {
      const result: Omit<ReturnType<ModalRootApi['openCard']>, 'update'> = open({
        ...props,
        type: 'card',
      });
      return {
        id: result.id,
        close: result.close,
        then: result.then,
        update: (newProps) => {
          updateModalProps(result.id, {
            type: 'card',
            ...newProps,
          });
        },
      };
    },
    [open, updateModalProps],
  );

  const openPage: ModalRootApi['openPage'] = React.useCallback(
    (props) => {
      const result: Omit<ReturnType<ModalRootApi['openPage']>, 'update'> = open({
        ...props,
        type: 'page',
      });
      return {
        id: result.id,
        close: result.close,
        then: result.then,
        update: (newProps) =>
          updateModalProps(result.id, {
            type: 'page',
            ...newProps,
          }),
      };
    },
    [open, updateModalProps],
  );

  const api: ModalRootApi = React.useMemo(() => {
    return {
      openPage,
      openCard,
      close,
      closeAll,
    };
  }, [close, closeAll, openCard, openPage]);

  const contextHolder: React.ReactElement | null = React.useMemo(() => {
    return state.modals.length || overlayShowed ? (
      <ContextHolder
        modals={state.modals}
        activeModal={state.activeModal}
        onOverlayClosed={() => setOverlayShowed(false)}
        {...props}
      />
    ) : null;
  }, [state.modals, state.activeModal, overlayShowed, props]);

  return [api, contextHolder];
};
