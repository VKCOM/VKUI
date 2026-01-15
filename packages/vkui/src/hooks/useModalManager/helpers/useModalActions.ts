import type { UIEvent } from 'react';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type ModalPageCloseReason } from '../../../components/ModalPage/types';
import { ModalCardWrapper } from '../components/ModalCardWrapper';
import { ModalPageWrapper } from '../components/ModalPageWrapper';
import {
  type CustomModalCardItem,
  type CustomModalPageItem,
  type CustomModalPayload,
  type CustomModalProps,
  type ModalManagerApi,
  type ModalManagerItem,
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
  item: ModalManagerItem,
  id: string,
  callbacks: CreateModalCallbacks,
): ModalManagerItem => {
  const { onClose, onClosed } = callbacks;

  switch (item.type) {
    case 'card':
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
  }
};

const resolveProps = <
  T extends OpenModalCardProps | OpenModalPageProps,
  AdditionalProps extends object,
>(
  props:
    | CustomModalPayload<T, AdditionalProps>
    | React.ComponentType<CustomModalProps<T, AdditionalProps>>,
): CustomModalPayload<T, AdditionalProps> => {
  if ('component' in props) {
    return props;
  }
  return {
    component: props,
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
    <T extends ModalManagerItem>(
      item: T,
    ): T extends CustomModalPageItem
      ? OpenPageReturn
      : T extends CustomModalCardItem
        ? OpenCardReturn
        : never => {
      const modalProps: OpenModalPageProps | OpenModalCardProps = item.modalProps || {};

      const id = item.id;

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
        update: item.update,
      } as any;
    },
    [store],
  );

  const update: ModalManagerApi['update'] = React.useCallback(
    (...args) => {
      // Тип нужен только для улучшения типизации при вызове функции
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [id, _, props] = args;
      store.updateModalProps(id, props);
    },
    [store],
  );

  const close: ModalManagerApi['close'] = React.useCallback(
    (id) => {
      store.closeModal(id);
    },
    [store],
  );

  const openCustomModalCard: ModalManagerApi['openCustomModalCard'] = React.useCallback(
    (props) => {
      const { id: idProp, component, baseProps: modalProps, additionalProps } = resolveProps(props);

      const id = idProp || uuidv4();

      return open<CustomModalCardItem>({
        type: 'card',
        id,
        component,
        additionalProps,
        modalProps: modalProps,
        close: () => close(id),
        update: (newProps) => update(id, 'card', newProps),
      });
    },
    [close, open, update],
  );

  const openCustomModalPage: ModalManagerApi['openCustomModalPage'] = React.useCallback(
    (props) => {
      const { id: idProp, component, baseProps: modalProps, additionalProps } = resolveProps(props);

      const id = idProp || uuidv4();

      return open({
        type: 'page',
        id,
        component,
        additionalProps,
        modalProps: modalProps,
        close: () => close(id),
        update: (newProps) => update(id, 'page', newProps),
      });
    },
    [close, open, update],
  );

  const openModalPage: ModalManagerApi['openModalPage'] = React.useCallback(
    (props) => {
      return openCustomModalPage({
        id: props.id,
        component: ModalPageWrapper,
        baseProps: props,
      });
    },
    [openCustomModalPage],
  );

  const openModalCard: ModalManagerApi['openModalCard'] = React.useCallback(
    (props) => {
      return openCustomModalCard({
        id: props.id,
        component: ModalCardWrapper,
        baseProps: props,
      });
    },
    [openCustomModalCard],
  );

  const closeAll: ModalManagerApi['closeAll'] = React.useCallback(() => {
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
