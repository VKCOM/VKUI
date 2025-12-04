'use client';

import * as React from 'react';
import { BREAKPOINTS } from '../../lib/adaptivity';
import { heightPlus, widthPlus } from '../../lib/adaptivity/breakpoints';
import { useMediaQuery } from '../useMediaQuery';
import { SnackbarsContainer } from './components/SnackbarsContainer';
import { useSnackbarActions } from './helpers/useSnackbarActions';
import { useSnackbarConfig } from './helpers/useSnackbarConfig';
import { useSnackbarState } from './helpers/useSnackbarState';
import {
  type SnackbarApi,
  type SnackbarPlacement,
  type SnackbarsMap,
  type UseSnackbar,
} from './types';

const DESKTOP_MEDIA_QUERY = `${widthPlus(
  BREAKPOINTS.SMALL_TABLET,
)} and (pointer: fine), ${widthPlus(BREAKPOINTS.SMALL_TABLET)} and ${heightPlus(
  BREAKPOINTS.MEDIUM_HEIGHT,
)}`;

export const useSnackbar = (params: UseSnackbar.Parameters = {}): UseSnackbar.Return => {
  const config = useSnackbarConfig(params);
  const snackbarState = useSnackbarState();
  const snackbarsMapRef = React.useRef<SnackbarsMap>({});

  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  const actions = useSnackbarActions({
    snackbarState,
    maxSnackbarsCount: config.maxSnackbarsCount,
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
      setMaxSnackbarsCount: config.setMaxSnackbarsCount,
      setQueueStrategy: config.setQueueStrategy,
      setVerticalOffsetYStart: config.setVerticalOffsetYStart,
      setVerticalOffsetYEnd: config.setVerticalOffsetYEnd,
    };
  }, [
    actions.close,
    actions.closeAll,
    actions.open,
    actions.openCustom,
    actions.update,
    config.setMaxSnackbarsCount,
    config.setQueueStrategy,
    config.setVerticalOffsetYEnd,
    config.setVerticalOffsetYStart,
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

      if (notCloseSnackbars.length < config.maxSnackbarsCount) {
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
  }, [
    snackbarState.state.snackbars,
    snackbarState.state.snackbarsToClose,
    config.maxSnackbarsCount,
  ]);

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
  ]);

  return [api, holder];
};
