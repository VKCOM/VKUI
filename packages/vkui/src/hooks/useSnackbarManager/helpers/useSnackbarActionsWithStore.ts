import * as React from 'react';
import { createSnackbarActions, type SnackbarActions } from './createSnackbarActions';
import type { SnackbarStore } from './createSnackbarStore';

export type UseSnackbarActionsWithStoreProps = {
  store: SnackbarStore;
  limit: number;
  queueStrategy: 'queue' | 'shift';
  isDesktop: boolean;
};

export const useSnackbarActionsWithStore = ({
  store,
  limit,
  queueStrategy,
  isDesktop,
}: UseSnackbarActionsWithStoreProps): SnackbarActions => {
  const limitRef = React.useRef(limit);
  const queueStrategyRef = React.useRef(queueStrategy);
  const isDesktopRef = React.useRef(isDesktop);

  React.useEffect(() => {
    limitRef.current = limit;
  }, [limit]);

  React.useEffect(() => {
    queueStrategyRef.current = queueStrategy;
  }, [queueStrategy]);

  React.useEffect(() => {
    isDesktopRef.current = isDesktop;
  }, [isDesktop]);

  return React.useMemo<SnackbarActions>(() => {
    /* eslint-disable react-hooks/refs -- refs читаются в колбэках API (open/close), не при рендере */
    return createSnackbarActions(store, {
      getLimit: () => limitRef.current,
      getQueueStrategy: () => queueStrategyRef.current,
      getIsDesktop: () => isDesktopRef.current,
    });
    /* eslint-enable react-hooks/refs */
  }, [store]);
};
