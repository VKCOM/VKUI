'use client';

import * as React from 'react';
import type { SnackbarStore } from '../helpers/createSnackbarStore';
import type { SnackbarPlacement, SnackbarsMap, UseSnackbar } from '../types';
import { SnackbarsContainer } from './SnackbarsContainer';

interface SnackbarHolderProps
  extends Pick<UseSnackbar.Parameters, 'offsetYStart' | 'offsetYEnd' | 'zIndex'> {
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

  const { snackbarsMap, placements } = React.useMemo(() => {
    const map: SnackbarsMap = {};
    const placementsSet = new Set<SnackbarPlacement>();
    const openedCounters: Record<string, number> = {};

    for (const snackbar of state.snackbars) {
      const placement = snackbar.snackbarProps.placement;
      const isClosing = state.snackbarsToClose.has(snackbar.id);

      if (!map[placement]) {
        map[placement] = [];
        openedCounters[placement] = 0;
      }

      const openedCount = openedCounters[placement];

      if (openedCount >= limit) {
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
        openedCounters[placement] = openedCount + 1;
      }

      placementsSet.add(placement);
    }

    return { snackbarsMap: map, placements: Array.from(placementsSet) };
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
