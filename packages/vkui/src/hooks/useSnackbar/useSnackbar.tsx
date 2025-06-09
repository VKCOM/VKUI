'use client';

import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BREAKPOINTS } from '../../lib/adaptivity';
import { heightPlus, widthPlus } from '../../lib/adaptivity/breakpoints';
import { useMediaQuery } from '../useMediaQuery';
import { SnackbarsContainer } from './SnackbarsContainer';
import {
  type SnackbarApi,
  type SnackbarData,
  type SnackbarPlacement,
  type SnackbarsMap,
  type UseSnackbarResult,
} from './types';
/* eslint-disable jsdoc/require-jsdoc */

const DESKTOP_MEDIA_QUERY = `${widthPlus(BREAKPOINTS.SMALL_TABLET)} and (pointer: fine), ${widthPlus(BREAKPOINTS.SMALL_TABLET)} and ${heightPlus(BREAKPOINTS.MEDIUM_HEIGHT)}`;

const resolveMobilePlacement = (
  placement: SnackbarPlacement,
): Extract<SnackbarPlacement, 'top' | 'bottom'> => {
  if (placement.startsWith('top')) {
    return 'top';
  }
  return 'bottom';
};

const MAX_VISIBLE_SNACKBARS = 4;

export const useSnackbar = (): UseSnackbarResult => {
  const [snackbars, setSnackbars] = React.useState<SnackbarsMap>({});
  const [snackbarsToClose, setSnackbarsToClose] = React.useState(new Set<string>());
  const visibleSnackbarsIds = React.useRef<Set<string>>(new Set());

  const snackbarsQueue = React.useRef<SnackbarsMap>({});
  const snackbarsIdsInQueue = React.useRef<Record<string, SnackbarPlacement>>({});

  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  const popFromQueue = React.useCallback(
    (placement: SnackbarPlacement, snackbarsMap: SnackbarsMap): SnackbarData | null => {
      const snackbarsPlacementQueue = snackbarsQueue.current[placement] || [];
      const validPlacesCount = Math.min(
        snackbarsPlacementQueue.length,
        Math.max(0, MAX_VISIBLE_SNACKBARS - snackbarsMap[placement].length),
      );
      if (validPlacesCount > 0) {
        const firstFromQueue = snackbarsPlacementQueue.pop();
        if (firstFromQueue) {
          delete snackbarsIdsInQueue.current[firstFromQueue.id];
          return firstFromQueue;
        }
      }
      return null;
    },
    [],
  );

  const addToQueue = React.useCallback(
    (snackbarData: SnackbarData, placement: SnackbarPlacement) => {
      const queueSnackbars = snackbarsQueue.current[placement] || [];
      queueSnackbars.push(snackbarData);
      snackbarsQueue.current[placement] = queueSnackbars;
      snackbarsIdsInQueue.current[snackbarData.id] = placement;
    },
    [],
  );

  const removeSnackbar = React.useCallback(
    (id: string, placement: SnackbarPlacement) => {
      setSnackbars((oldSnackbars) => {
        const newSnackbars: SnackbarsMap = { ...oldSnackbars };
        newSnackbars[placement] = newSnackbars[placement].filter((snackbar) => snackbar.id !== id);
        visibleSnackbarsIds.current.delete(id);

        const firstFromQueue = popFromQueue(placement, newSnackbars);

        if (firstFromQueue) {
          newSnackbars[placement].push(firstFromQueue);
          visibleSnackbarsIds.current.add(firstFromQueue.id);
        }

        if (!newSnackbars[placement].length) {
          delete newSnackbars[placement];
        }

        return newSnackbars;
      });
      setSnackbarsToClose((oldSnackbars) => {
        oldSnackbars.delete(id);
        return new Set(oldSnackbars);
      });
    },
    [popFromQueue],
  );

  const onOpenSnackbar: SnackbarApi['open'] = React.useCallback(
    (config) => {
      const placement: SnackbarPlacement = config.placement || 'bottom-start';
      const resolvedPlacement = isDesktop ? placement : resolveMobilePlacement(placement);

      const id = config.id || uuidv4();
      setSnackbars((oldSnackbars) => {
        const currentSnackbars = oldSnackbars[resolvedPlacement] || [];

        const snackbarData = {
          id,
          props: {
            ...config,
            placement: resolvedPlacement,
            onClose: () => {
              config.onClose?.();
            },
          },
        };

        if (currentSnackbars.length >= MAX_VISIBLE_SNACKBARS) {
          addToQueue(snackbarData, placement);
          return oldSnackbars;
        } else {
          currentSnackbars.push(snackbarData);
          const newSnackbars = {
            ...oldSnackbars,
            [resolvedPlacement]: currentSnackbars,
          };
          visibleSnackbarsIds.current.add(snackbarData.id);
          return newSnackbars;
        }
      });
      return id;
    },
    [addToQueue, isDesktop],
  );

  const onUpdateSnackbar: SnackbarApi['update'] = React.useCallback((id, config) => {}, []);

  const onCloseSnackbar: SnackbarApi['close'] = React.useCallback((id) => {
    if (visibleSnackbarsIds.current.has(id)) {
      setSnackbarsToClose((oldSnackbars) => {
        oldSnackbars.add(id);
        return new Set(oldSnackbars);
      });
    } else if (snackbarsIdsInQueue.current[id]) {
      const snackbarPlacement = snackbarsIdsInQueue.current[id];
      snackbarsQueue.current[snackbarPlacement] = snackbarsQueue.current[snackbarPlacement].filter(
        (snackbar) => snackbar.id !== id,
      );
      delete snackbarsIdsInQueue.current[id];
    }
  }, []);

  const onClearQueue: SnackbarApi['clearQueue'] = React.useCallback((placement) => {
    if (placement) {
      snackbarsQueue.current[placement] = [];
    } else {
      snackbarsQueue.current = {};
    }
  }, []);

  const onCloseAllSnackbars: SnackbarApi['closeAll'] = React.useCallback(() => {
    setSnackbarsToClose(visibleSnackbarsIds.current);
    onClearQueue();
  }, [onClearQueue]);

  const api = React.useMemo<SnackbarApi>(() => {
    return {
      open: onOpenSnackbar,
      update: onUpdateSnackbar,
      close: onCloseSnackbar,
      closeAll: onCloseAllSnackbars,
      clearQueue: onClearQueue,
    };
  }, [onClearQueue, onCloseAllSnackbars, onCloseSnackbar, onOpenSnackbar, onUpdateSnackbar]);

  const holder = React.useMemo(() => {
    if (!Object.keys(snackbars).length) {
      return null;
    }
    return (
      <>
        {Object.entries(snackbars).map(([placement, snackbars]) => (
          <SnackbarsContainer
            key={placement}
            snackbars={snackbars.map((snackbar) => ({
              id: snackbar.id,
              props: {
                ...snackbar.props,
                open: snackbarsToClose.has(snackbar.id) ? false : undefined,
              },
            }))}
            placement={placement as SnackbarPlacement}
            onSnackbarContainerClosed={removeSnackbar}
          />
        ))}
      </>
    );
  }, [removeSnackbar, snackbars, snackbarsToClose]);

  return [api, holder];
};
