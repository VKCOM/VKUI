'use client';

import * as React from 'react';
import { ContextHolder } from './components/ContextHolder';
import { createModalStore } from './helpers/createModalStore';
import { useModalActions } from './helpers/useModalActions';
import type { ModalManagerApi, UseModalManagerProps, UseModalManagerReturn } from './types';

export const useModalManager = ({
  saveHistory: saveHistoryProp,
  ...props
}: UseModalManagerProps = {}): UseModalManagerReturn => {
  const [store] = React.useState(createModalStore);
  const isSaveHistoryControlled = saveHistoryProp !== undefined;
  const [saveHistoryState, setSaveHistory] = React.useState(saveHistoryProp ?? true);
  const saveHistory = isSaveHistoryControlled ? saveHistoryProp : saveHistoryState;

  const {
    openModalPage,
    openModalCard,
    openCustomModalCard,
    openCustomModalPage,
    close,
    update,
    closeAll,
  } = useModalActions({
    store,
    saveHistory,
  });

  const api: ModalManagerApi = React.useMemo(
    () => ({
      openModalPage,
      openModalCard,
      openCustomModalCard,
      openCustomModalPage,
      close,
      update,
      closeAll,
      setSaveHistory,
    }),
    [
      close,
      closeAll,
      openCustomModalCard,
      openCustomModalPage,
      openModalCard,
      openModalPage,
      update,
    ],
  );

  const contextHolder: React.ReactElement | null = React.useMemo(() => {
    return <ContextHolder {...props} store={store} />;
  }, [props, store]);

  return [api, contextHolder];
};
