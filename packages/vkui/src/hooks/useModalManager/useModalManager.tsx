'use client';

import * as React from 'react';
import { ContextHolder } from './components/ContextHolder';
import { createModalStore } from './helpers/createModalStore';
import { useModalActions } from './helpers/useModalActions';
import {
  type ModalManagerApi,
  type UseModalManagerProps,
  type UseModalManagerReturn,
} from './types';

export const useModalManager = ({
  saveHistory: saveHistoryProp = true,
  ...props
}: UseModalManagerProps = {}): UseModalManagerReturn => {
  const [store] = React.useState(createModalStore);
  const [saveHistory, setSaveHistory] = React.useState(saveHistoryProp);

  React.useEffect(() => {
    setSaveHistory(saveHistoryProp);
  }, [saveHistoryProp]);

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
