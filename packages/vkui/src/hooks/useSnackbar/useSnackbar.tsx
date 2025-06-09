'use client';

import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BREAKPOINTS } from '../../lib/adaptivity';
import { heightPlus, widthPlus } from '../../lib/adaptivity/breakpoints';
import { useMediaQuery } from '../useMediaQuery';
import { SnackbarsContainer } from './SnackbarsContainer';
import {
  type SnackbarApi,
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

export const useSnackbar = (): UseSnackbarResult => {
  const [snackbars, setSnackbars] = React.useState<SnackbarsMap>({});
  const [snackbarsToClose, setSnackbarsToClose] = React.useState(new Set<string>());
  const snackbarsRef = React.useRef<SnackbarsMap>({});

  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  const removeSnackbar = React.useCallback((id: string, placement: SnackbarPlacement) => {
    setSnackbars((oldSnackbars) => {
      const newSnackbars: SnackbarsMap = { ...oldSnackbars };
      newSnackbars[placement] = newSnackbars[placement].filter((snackbar) => snackbar.id !== id);
      if (!newSnackbars[placement].length) {
        delete newSnackbars[placement];
      }
      snackbarsRef.current = newSnackbars;
      return newSnackbars;
    });
    setSnackbarsToClose((oldSnackbars) => {
      oldSnackbars.delete(id);
      return new Set(oldSnackbars);
    });
  }, []);

  const onOpenSnackbar: SnackbarApi['open'] = React.useCallback(
    (config) => {
      const placement: SnackbarPlacement = config.placement || 'bottom-start';
      const resolvedPlacement = isDesktop ? placement : resolveMobilePlacement(placement);

      const id = config.id || uuidv4();
      setSnackbars((oldSnackbars) => {
        const currentSnackbars = oldSnackbars[resolvedPlacement] || [];
        currentSnackbars.push({
          id,
          props: {
            ...config,
            placement: resolvedPlacement,
            onClose: () => {
              config.onClose?.();
            },
          },
        });
        const newSnackbars = {
          ...oldSnackbars,
          [resolvedPlacement]: currentSnackbars,
        };
        snackbarsRef.current = newSnackbars;
        return newSnackbars;
      });
      return id;
    },
    [isDesktop],
  );

  const onCloseSnackbar = React.useCallback((id: string) => {
    setSnackbarsToClose((oldSnackbars) => {
      oldSnackbars.add(id);
      return new Set(oldSnackbars);
    });
  }, []);

  const onCloseAllSnackbars = React.useCallback(() => {
    const snackbarsIds = Object.values(snackbarsRef.current)
      .map((snackbars) => snackbars.map(({ id }) => id))
      .flat();
    if (snackbarsIds.length) {
      setSnackbarsToClose(new Set(snackbarsIds));
    }
  }, []);

  const api = React.useMemo<SnackbarApi>(() => {
    return {
      open: onOpenSnackbar,
      close: onCloseSnackbar,
      closeAll: onCloseAllSnackbars,
    };
  }, [onCloseAllSnackbars, onCloseSnackbar, onOpenSnackbar]);

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
