'use client';

import * as React from 'react';
import type { SnackbarStore } from '../helpers/createSnackbarStore';
import type { SnackbarPlacement, SnackbarsMap, UseSnackbar } from '../types';
import { SnackbarsContainer } from './SnackbarsContainer';

interface SnackbarHolderProps
  extends Pick<UseSnackbar.Props, 'offsetYStart' | 'offsetYEnd' | 'zIndex'> {
  store: SnackbarStore;
  limit: number;
}

export const SnackbarHolder: React.FC<SnackbarHolderProps> = ({
  store,
  limit,
  offsetYStart,
  offsetYEnd,
  zIndex,
}) => {
  const state = React.useSyncExternalStore(store.subscribe, store.getState, store.getState);

  const onSnackbarOpen = React.useCallback(
    (id: string) => {
      store.showedSnackbars.add(id);
    },
    [store],
  );

  const [snackbarsMap, placements] = React.useMemo(() => {
    const map: SnackbarsMap = {};
    const placements: SnackbarPlacement[] = [];
    const openedSnackbarsCountersByPlacement: Record<string, number> = {};

    for (const snackbar of state.snackbars) {
      const placement = snackbar.snackbarProps.placement;
      const isClosing = state.snackbarsToClose.has(snackbar.id);

      if (!map[placement]) {
        map[placement] = [];
        openedSnackbarsCountersByPlacement[placement] = 0;
        placements.push(placement);
      }

      const openedCount = openedSnackbarsCountersByPlacement[placement];

      if (openedCount >= limit && !isClosing) {
        continue;
      }

      map[placement].push({
        ...snackbar,
        snackbarProps: {
          ...snackbar.snackbarProps,
          open: isClosing ? false : undefined,
        },
      });

      if (!isClosing) {
        openedSnackbarsCountersByPlacement[placement] = openedCount + 1;
      }
    }

    return [map, placements];
  }, [state.snackbars, state.snackbarsToClose, limit]);

  if (placements.length === 0) {
    return null;
  }

  return (
    <>
      {placements.map((placement) => (
        <SnackbarsContainer
          key={placement}
          snackbars={snackbarsMap[placement]}
          placement={placement}
          onSnackbarContainerClosed={store.removeSnackbar}
          onSnackbarOpen={onSnackbarOpen}
          offsetYStart={offsetYStart}
          offsetYEnd={offsetYEnd}
          zIndex={zIndex}
        />
      ))}
    </>
  );
};
