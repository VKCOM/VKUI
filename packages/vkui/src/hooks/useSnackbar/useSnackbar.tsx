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
  const [snackbars, setSnackbars] = React.useState<SnackbarData[]>([]);
  const [snackbarsToClose, setSnackbarsToClose] = React.useState(new Set<string>());
  const showedSnackbars = React.useRef<Set<string>>(new Set());

  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  const removeSnackbar = React.useCallback((id: string) => {
    setSnackbars((oldSnackbars) => oldSnackbars.filter((snackbar) => snackbar.id !== id));
    setSnackbarsToClose((oldSnackbars) => {
      oldSnackbars.delete(id);
      return new Set(oldSnackbars);
    });
    showedSnackbars.current.delete(id);
  }, []);

  const onOpenSnackbar: SnackbarApi['open'] = React.useCallback(
    (config) => {
      const placement: SnackbarPlacement = config.placement || 'bottom-start';
      const resolvedPlacement = isDesktop ? placement : resolveMobilePlacement(placement);

      const id = config.id || uuidv4();
      setSnackbars((oldSnackbars) => [
        ...oldSnackbars,
        {
          ...config,
          id,
          placement: resolvedPlacement,
          onClose: () => {
            config.onClose?.();
          },
        },
      ]);
      return id;
    },
    [isDesktop],
  );

  const onUpdateSnackbar: SnackbarApi['update'] = React.useCallback((id, config) => {
    setSnackbars((oldSnackbars) =>
      oldSnackbars.map((snackbar) => (snackbar.id === id ? { ...snackbar, ...config } : snackbar)),
    );
  }, []);

  const onCloseSnackbar: SnackbarApi['close'] = React.useCallback(
    (id) => {
      if (showedSnackbars.current.has(id)) {
        setSnackbarsToClose((oldSnackbars) => {
          oldSnackbars.add(id);
          return new Set(oldSnackbars);
        });
      } else {
        removeSnackbar(id);
      }
    },
    [removeSnackbar],
  );

  const onCloseAllSnackbars: SnackbarApi['closeAll'] = React.useCallback(() => {
    setSnackbarsToClose(new Set(snackbars.map(({ id }) => id)));
  }, [snackbars]);

  const api = React.useMemo<SnackbarApi>(() => {
    return {
      open: onOpenSnackbar,
      update: onUpdateSnackbar,
      close: onCloseSnackbar,
      closeAll: onCloseAllSnackbars,
    };
  }, [onCloseAllSnackbars, onCloseSnackbar, onOpenSnackbar, onUpdateSnackbar]);

  const snackbarsMap: SnackbarsMap = React.useMemo(() => {
    const map: SnackbarsMap = {};
    snackbars.forEach((snackbar) => {
      const placement = snackbar.placement;
      const placementSnackbars = map[placement] || [];
      if (placementSnackbars.length < MAX_VISIBLE_SNACKBARS) {
        placementSnackbars.push({
          ...snackbar,
          open: snackbarsToClose.has(snackbar.id) ? false : undefined,
        });
      }
      map[placement] = placementSnackbars;
    });
    return map;
  }, [snackbars, snackbarsToClose]);

  const onSnackbarShow = React.useCallback((id: string) => {
    showedSnackbars.current.add(id);
  }, []);

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
            onSnackbarContainerClosed={removeSnackbar}
            onSnackbarShow={onSnackbarShow}
          />
        ))}
      </>
    );
  }, [onSnackbarShow, removeSnackbar, snackbarsMap]);

  return [api, holder];
};
