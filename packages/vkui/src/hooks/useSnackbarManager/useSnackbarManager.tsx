'use client';

import * as React from 'react';
import { SnackbarHolder } from './components/SnackbarHolder';
import { createSnackbarStore } from './helpers/createSnackbarStore';
import { useIsDesktop } from './helpers/useIsDesktop';
import { useSnackbarActionsWithStore } from './helpers/useSnackbarActionsWithStore';
import { useSnackbarConfig } from './helpers/useSnackbarConfig';
import { type SnackbarApi, type UseSnackbar } from './types';

export const useSnackbarManager = (params: UseSnackbar.Props = {}): UseSnackbar.Return => {
  const config = useSnackbarConfig(params);

  const [store] = React.useState(createSnackbarStore);

  const isDesktop = useIsDesktop();

  const actions = useSnackbarActionsWithStore({
    store,
    limit: config.limit,
    queueStrategy: config.queueStrategy,
    isDesktop,
  });

  const api = React.useMemo<SnackbarApi.Api>(() => {
    return {
      open: actions.open,
      openCustom: actions.openCustom,
      update: actions.update,
      close: actions.close,
      closeAll: actions.closeAll,
      setLimit: config.setLimit,
      setQueueStrategy: config.setQueueStrategy,
      setOffsetYStart: config.setOffsetYStart,
      setOffsetYEnd: config.setOffsetYEnd,
      setZIndex: config.setZIndex,
    };
  }, [
    actions.close,
    actions.closeAll,
    actions.open,
    actions.openCustom,
    actions.update,
    config.setLimit,
    config.setQueueStrategy,
    config.setOffsetYEnd,
    config.setOffsetYStart,
    config.setZIndex,
  ]);

  const holder = React.useMemo(() => {
    return (
      <SnackbarHolder
        store={store}
        limit={config.limit}
        offsetYStart={config.offsetYStart}
        offsetYEnd={config.offsetYEnd}
        zIndex={config.zIndex}
      />
    );
  }, [store, config.limit, config.offsetYStart, config.offsetYEnd, config.zIndex]);

  return [api, holder];
};
