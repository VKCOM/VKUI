import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ModalCard } from '../../ModalCard/ModalCard';
import { type ModalCardProps } from '../../ModalCard/types';
import { ModalPage } from '../../ModalPage/ModalPage';
import { type ModalPageProps } from '../../ModalPage/types';
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
  const needCloseModals = React.useRef<Set<string>>(new Set());

  const removeModalImpl = (oldState: ModalRootState, id: string) => {
    const { modals, activeModal } = oldState;
    const newModals = modals.filter(({ id: modalId }) => id !== modalId);
    return {
      activeModal,
      modals: newModals,
    };
  };

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
                }
                props.onClosed?.();
              },
            },
          ],
          activeModal: id,
        };
      });
      return id;
    },
    [removeModal, setPrevActiveModal],
  );

  const openCard: ModalRootApi['openCard'] = React.useCallback(
    (props: ModalCardProps) => {
      return open({ ...props, type: 'card' });
    },
    [open],
  );

  const openPage: ModalRootApi['openPage'] = React.useCallback(
    (props: ModalPageProps) => {
      return open({ ...props, type: 'page' });
    },
    [open],
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
    return state.modals.length ? (
      <ContextHolder modals={state.modals} activeModal={state.activeModal} {...props} />
    ) : null;
  }, [state, props]);

  return [api, contextHolder];
};
