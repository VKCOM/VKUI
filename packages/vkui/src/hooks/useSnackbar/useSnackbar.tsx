'use client';

import * as React from 'react';
import { SnackbarsContainer } from './components/SnackbarsContainer';
import { useIsDesktop } from './helpers/useIsDesktop';
import { useSnackbarActions } from './helpers/useSnackbarActions';
import { useSnackbarConfig } from './helpers/useSnackbarConfig';
import { useSnackbarState } from './helpers/useSnackbarState';
import {
  type SnackbarApi,
  type SnackbarPlacement,
  type SnackbarsMap,
  type UseSnackbar,
} from './types';

export const useSnackbar = (params: UseSnackbar.Parameters = {}): UseSnackbar.Return => {
  const config = useSnackbarConfig(params);
  const snackbarState = useSnackbarState();
  const snackbarsMapRef = React.useRef<SnackbarsMap>({});

  const isDesktop = useIsDesktop();

  const actions = useSnackbarActions({
    snackbarState,
    limit: config.limit,
    queueStrategy: config.queueStrategy,
    isDesktop,
    snackbarsMapRef,
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

  const onSnackbarOpen = React.useCallback(
    (id: string) => {
      snackbarState.showedSnackbars.current.add(id);
    },
    [snackbarState.showedSnackbars],
  );

  const snackbarsMap: SnackbarsMap = React.useMemo(() => {
    const map: SnackbarsMap = {};
    snackbarState.state.snackbars.forEach((snackbar) => {
      const placement = snackbar.snackbarProps.placement;
      const placementSnackbars = map[placement] || [];

      const notCloseSnackbars = placementSnackbars.filter(
        (snackbar) => !snackbarState.state.snackbarsToClose.has(snackbar.id),
      );

      if (notCloseSnackbars.length < config.limit) {
        placementSnackbars.push({
          ...snackbar,
          snackbarProps: {
            ...snackbar.snackbarProps,
            open: snackbarState.state.snackbarsToClose.has(snackbar.id) ? false : undefined,
          },
        });
      }
      map[placement] = placementSnackbars;
    });
    return map;
  }, [snackbarState.state.snackbars, snackbarState.state.snackbarsToClose, config.limit]);

  React.useEffect(() => {
    snackbarsMapRef.current = snackbarsMap;
  }, [snackbarsMap]);

  const holder = React.useMemo(() => {
    if (!Object.keys(snackbarsMap).length) {
      return null;
    }
    return (
      <>
        {Object.entries(snackbarsMap).map(([placement, snackbars]) => (
          <SnackbarsContainer
            key={placement}
            snackbars={snackbars}
            placement={placement as SnackbarPlacement}
            onSnackbarContainerClosed={snackbarState.removeSnackbar}
            onSnackbarOpen={onSnackbarOpen}
            verticalOffsetYStart={config.verticalOffsetYStart}
            verticalOffsetYEnd={config.verticalOffsetYEnd}
            zIndex={config.zIndex}
          />
        ))}
      </>
    );
  }, [
    onSnackbarOpen,
    snackbarState.removeSnackbar,
    snackbarsMap,
    config.verticalOffsetYEnd,
    config.verticalOffsetYStart,
    config.zIndex,
  ]);

  return [api, holder];
};
