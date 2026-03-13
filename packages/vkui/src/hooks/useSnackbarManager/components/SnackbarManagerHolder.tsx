'use client';

import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import {
  getSnackbarManagerInternals,
  snackbarManager,
  type SnackbarManagerConfig,
} from '../snackbarManager';
import type { SnackbarManagerNS } from '../types';
import { SnackbarHolder } from './SnackbarHolder';

export const SnackbarManagerHolder: React.FC<SnackbarManagerNS.HolderProps> = ({
  manager = snackbarManager,
  limit,
  queueStrategy,
  offsetYStart,
  offsetYEnd,
  zIndex,
}) => {
  const internals = getSnackbarManagerInternals(manager);

  React.useEffect(() => {
    internals.registerHolder();
    return () => {
      internals.unregisterHolder();
    };
  }, [internals]);

  useIsomorphicLayoutEffect(() => {
    if (limit !== undefined) {
      manager.setLimit(limit);
    }
  }, [manager, limit]);

  useIsomorphicLayoutEffect(() => {
    if (queueStrategy !== undefined) {
      manager.setQueueStrategy(queueStrategy);
    }
  }, [manager, queueStrategy]);

  useIsomorphicLayoutEffect(() => {
    if (offsetYStart !== undefined) {
      manager.setOffsetYStart(offsetYStart);
    }
  }, [manager, offsetYStart]);

  useIsomorphicLayoutEffect(() => {
    if (offsetYEnd !== undefined) {
      manager.setOffsetYEnd(offsetYEnd);
    }
  }, [manager, offsetYEnd]);

  useIsomorphicLayoutEffect(() => {
    if (zIndex !== undefined) {
      manager.setZIndex(zIndex);
    }
  }, [manager, zIndex]);

  const configStore = React.useSyncExternalStore<SnackbarManagerConfig>(
    internals.subscribeConfig,
    internals.getConfig,
    internals.getConfig,
  );

  return (
    <SnackbarHolder
      store={internals.store}
      limit={configStore.limit}
      offsetYStart={configStore.offsetYStart}
      offsetYEnd={configStore.offsetYEnd}
      zIndex={configStore.zIndex}
    />
  );
};
