'use client';

import * as React from 'react';
import { SnackbarHolder } from './components/SnackbarHolder';
import { createSnackbarStore } from './helpers/createSnackbarStore';
import { useIsDesktop } from './helpers/useIsDesktop';
import { useSnackbarActionsWithStore } from './helpers/useSnackbarActionsWithStore';
import { useSnackbarConfig } from './helpers/useSnackbarConfig';
import { type SnackbarApi, type UseSnackbar } from './types';

export const useSnackbarManager = (params: UseSnackbar.Parameters = {}): UseSnackbar.Return => {
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
      setVerticalOffsetYStart: config.setVerticalOffsetYStart,
      setVerticalOffsetYEnd: config.setVerticalOffsetYEnd,
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
    config.setVerticalOffsetYEnd,
    config.setVerticalOffsetYStart,
    config.setZIndex,
  ]);

  const holder = React.useMemo(() => {
    return (
      <SnackbarHolder
        store={store}
        limit={config.limit}
        verticalOffsetYStart={config.verticalOffsetYStart}
        verticalOffsetYEnd={config.verticalOffsetYEnd}
        zIndex={config.zIndex}
      />
    );
  }, [store, config.limit, config.verticalOffsetYStart, config.verticalOffsetYEnd, config.zIndex]);

  return [api, holder];
};
