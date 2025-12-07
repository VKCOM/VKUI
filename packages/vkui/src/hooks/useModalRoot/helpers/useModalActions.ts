import type { UIEvent } from 'react';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type ModalPageCloseReason } from '../../../components/ModalPage/types';
import {
  type CustomModalCardItem,
  type CustomModalPayload,
  type CustomModalProps,
  type ModalRootApi,
  type ModalRootItem,
  type OpenCardReturn,
  type OpenModalCardProps,
  type OpenModalPageProps,
  type OpenPageReturn,
} from '../types';
import type { ModalStore } from './createModalStore';

type CreateModalCallbacks = {
  onClose: (reason: ModalPageCloseReason, event?: UIEvent<HTMLElement>) => void;
  onClosed: () => void;
};

const createModalCallbacks = (
  id: string,
  modalProps: OpenModalPageProps | OpenModalCardProps,
  store: ModalStore,
  resolvePromise: () => void,
): CreateModalCallbacks => {
  const onClose: OpenModalPageProps['onClose'] = (reason, event) => {
    store.setPrevActive(id);
    modalProps.onClose?.(reason, event);
  };

  const onClosed = () => {
    if (store.needCloseModals.has(id)) {
      store.removeModal(id);
      store.needCloseModals.delete(id);
      resolvePromise();
    }
    modalProps.onClosed?.();
  };

  return { onClose, onClosed };
};

const createModalData = (
  item: ModalRootItem,
  id: string,
  callbacks: CreateModalCallbacks,
): ModalRootItem => {
  const { onClose, onClosed } = callbacks;

  switch (item.type) {
    case 'custom-card':
      return {
        ...item,
        id,
        modalProps: {
          ...item.modalProps,
          id,
          onClose,
          onClosed,
        },
      };
    case 'custom-page':
      return {
        ...item,
        id,
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
        ...item,
        id,
        onClose,
        onClosed,
      };
  }
};

const resolveProps = <
  T extends OpenModalCardProps | OpenModalPageProps,
  AdditionalProps extends object,
>(
  props:
    | CustomModalPayload<T, AdditionalProps>
    | React.ComponentType<CustomModalProps<T, AdditionalProps>>,
) => {
  if ('component' in props) {
    return props;
  }
  return {
    component: props as React.ComponentType,
  };
};

export type UseModalActionsProps = {
  store: ModalStore;
  saveHistory: boolean;
};

export const useModalActions = ({ store, saveHistory }: UseModalActionsProps) => {
  const saveHistoryRef = React.useRef(saveHistory);

  React.useEffect(() => {
    saveHistoryRef.current = saveHistory;
  }, [saveHistory]);

  const open = React.useCallback(
    <T extends ModalRootItem>(item: T) => {
      const modalProps: OpenModalPageProps | OpenModalCardProps =
        (item.type === 'custom-card' || item.type === 'custom-page' ? item.modalProps : item) || {};

      const id = modalProps.id || uuidv4();

      let resolvePromise: () => void;
      const promise = new Promise<void>((resolve) => {
        resolvePromise = resolve;
      });

      const callbacks = createModalCallbacks(id, modalProps, store, resolvePromise!);

      const newModalData = createModalData(item, id, callbacks);

      if (!saveHistoryRef.current) {
        store.closePrevActiveIfNoHistory();
      }

      store.addModal(newModalData);

      return {
        id,
        close: () => store.closeModal(id),
        onClose: <R>(resolve?: () => R) => {
          return promise.then(resolve);
        },
      };
    },
    [store],
  );

  const update: ModalRootApi['update'] = React.useCallback(
    (...args) => {
      // Тип нужен только для улучшения типизации при вызове функции
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [id, _, props] = args;
      store.updateModalProps(id, props);
    },
    [store],
  );

  const openModalCard: ModalRootApi['openModalCard'] = React.useCallback(
    (props) => {
      const result: Omit<OpenCardReturn, 'update'> = open({
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
      const result = open({
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

  const openCustomModalCard: ModalRootApi['openCustomModalCard'] = React.useCallback(
    (props) => {
      const {
        id,
        component,
        baseProps: modalProps,
        additionalProps,
      } = resolveProps(props) as CustomModalPayload<OpenModalCardProps>;

      let result: Omit<OpenCardReturn, 'update'>;
      result = open<CustomModalCardItem>({
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
        update: (newProps) => update(result.id, 'card', newProps),
      };
    },
    [open, update],
  );

  const openCustomModalPage: ModalRootApi['openCustomModalPage'] = React.useCallback(
    (props) => {
      const {
        id,
        component,
        baseProps: modalProps,
        additionalProps,
      } = resolveProps(props) as CustomModalPayload<OpenModalPageProps>;

      let result: Omit<OpenPageReturn, 'update'>;
      result = open({
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
        update: (newProps) => update(result.id, 'page', newProps),
      };
    },
    [open, update],
  );

  const close: ModalRootApi['close'] = React.useCallback(
    (id) => {
      store.closeModal(id);
    },
    [store],
  );

  const closeAll: ModalRootApi['closeAll'] = React.useCallback(() => {
    store.closeAll();
  }, [store]);

  return {
    openModalPage,
    openModalCard,
    openCustomModalCard,
    openCustomModalPage,
    close,
    update,
    closeAll,
  };
};
