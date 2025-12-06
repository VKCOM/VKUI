'use client';

import * as React from 'react';
import type { SnackbarStore } from '../helpers/createSnackbarStore';
import type { SnackbarPlacement, SnackbarsMap, UseSnackbar } from '../types';
import { SnackbarsContainer } from './SnackbarsContainer';

interface SnackbarHolderProps
  extends Pick<UseSnackbar.Parameters, 'verticalOffsetYStart' | 'verticalOffsetYEnd' | 'zIndex'> {
  store: SnackbarStore;
  limit: number;
}

export const SnackbarHolder: React.FC<SnackbarHolderProps> = ({
  store,
  limit,
  verticalOffsetYStart,
  verticalOffsetYEnd,
  zIndex,
}) => {
  const state = React.useSyncExternalStore(store.subscribe, store.getState, store.getState);

  const onSnackbarOpen = React.useCallback(
    (id: string) => {
      store.showedSnackbars.add(id);
    },
    [store],
  );

  const snackbarsMap: SnackbarsMap = React.useMemo(() => {
    const map: SnackbarsMap = {};
    state.snackbars.forEach((snackbar) => {
      const placement = snackbar.snackbarProps.placement;
      const placementSnackbars = map[placement] || [];

      const notCloseSnackbars = placementSnackbars.filter(
        (snackbar) => !state.snackbarsToClose.has(snackbar.id),
      );

      if (notCloseSnackbars.length < limit) {
        placementSnackbars.push({
          ...snackbar,
          snackbarProps: {
            ...snackbar.snackbarProps,
            open: state.snackbarsToClose.has(snackbar.id) ? false : undefined,
          },
        });
      }
      map[placement] = placementSnackbars;
    });
    return map;
  }, [state.snackbars, state.snackbarsToClose, limit]);

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
          onSnackbarContainerClosed={store.removeSnackbar}
          onSnackbarOpen={onSnackbarOpen}
          verticalOffsetYStart={verticalOffsetYStart}
          verticalOffsetYEnd={verticalOffsetYEnd}
          zIndex={zIndex}
        />
      ))}
    </>
  );
};
