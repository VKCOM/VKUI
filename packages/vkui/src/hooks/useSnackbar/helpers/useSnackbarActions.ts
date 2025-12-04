import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  type CommonOnOpenPayload,
  type CustomSnackbar,
  type SnackbarApi,
  type SnackbarPlacement,
  type SnackbarsMap,
} from '../types';
import { type UseSnackbarStateReturn } from './useSnackbarState';

const resolveMobilePlacement = (
  placement: SnackbarPlacement,
): Extract<SnackbarPlacement, 'top' | 'bottom'> => {
  if (placement.startsWith('top')) {
    return 'top';
  }
  return 'bottom';
};

export type UseSnackbarActionsProps = {
  snackbarState: UseSnackbarStateReturn;
  limit: number;
  queueStrategy: 'queue' | 'shift';
  isDesktop: boolean;
  snackbarsMapRef: React.RefObject<SnackbarsMap>;
};

export const useSnackbarActions = ({
  snackbarState,
  limit,
  queueStrategy,
  isDesktop,
  snackbarsMapRef,
}: UseSnackbarActionsProps) => {
  const { addSnackbar, updateSnackbar, closeSnackbar, closeAll, removeSnackbar, showedSnackbars } =
    snackbarState;

  const onOpenSnackbarImpl = React.useCallback(
    (item: CommonOnOpenPayload): SnackbarApi.OpenSnackbarReturn => {
      const placement: SnackbarPlacement = item.snackbarProps?.placement || 'bottom-start';
      const resolvedPlacement = isDesktop ? placement : resolveMobilePlacement(placement);

      const placementSnackbars = snackbarsMapRef.current[resolvedPlacement] || [];

      const withOverflow =
        queueStrategy === 'shift' && placementSnackbars.length >= limit;

      let resolvePromise: () => void;
      const promise = new Promise<void>((resolve) => {
        resolvePromise = resolve;
      });

      const id = item.id || uuidv4();

      if (withOverflow) {
        const snackbarToClose = placementSnackbars.find((snackbar) => {
          return !snackbarState.state.snackbarsToClose.has(snackbar.id);
        });
        if (snackbarToClose) {
          closeSnackbar(snackbarToClose.id);
        }
      }

      addSnackbar({
        ...item,
        id,
        snackbarProps: {
          ...item.snackbarProps,
          id,
          placement: resolvedPlacement,
          onClose: () => {
            resolvePromise!();
            item.snackbarProps?.onClose?.();
          },
        },
      });

      return {
        id,
        close: () => {
          if (showedSnackbars.current.has(id)) {
            closeSnackbar(id);
          } else {
            removeSnackbar(id);
          }
        },
        update: (newProps) => updateSnackbar(id, newProps),
        onClose: <R>(resolve?: () => R) => {
          return promise.then(resolve);
        },
      };
    },
    [
      isDesktop,
      limit,
      queueStrategy,
      snackbarsMapRef,
      snackbarState.state.snackbarsToClose,
      closeSnackbar,
      addSnackbar,
      showedSnackbars,
      removeSnackbar,
      updateSnackbar,
    ],
  );

  const open: SnackbarApi.Api['open'] = React.useCallback(
    (config) => {
      return onOpenSnackbarImpl({
        type: 'simple',
        id: config.id,
        snackbarProps: config,
      });
    },
    [onOpenSnackbarImpl],
  );

  const openCustom: SnackbarApi.Api['openCustom'] = React.useCallback(
    (config) => {
      if ('component' in config) {
        const result = onOpenSnackbarImpl({
          type: 'custom',
          id: config.id,
          component: config.component,
          snackbarProps: config.baseProps,
          additionalProps: config.additionalProps,
          close: () => result.close(),
          update: (newProps) => result.update(newProps),
        });
        return result;
      } else {
        const result = onOpenSnackbarImpl({
          type: 'custom',
          component: config as React.ComponentType<CustomSnackbar.Props<any>>,
          close: () => result.close(),
          update: (newProps) => result.update(newProps),
        });
        return result;
      }
    },
    [onOpenSnackbarImpl],
  );

  const update: SnackbarApi.Api['update'] = React.useCallback(
    (id, config) => {
      updateSnackbar(id, config);
    },
    [updateSnackbar],
  );

  const close: SnackbarApi.Api['close'] = React.useCallback(
    (id) => {
      if (showedSnackbars.current.has(id)) {
        closeSnackbar(id);
      } else {
        removeSnackbar(id);
      }
    },
    [closeSnackbar, removeSnackbar, showedSnackbars],
  );

  const closeAllSnackbars: SnackbarApi.Api['closeAll'] = React.useCallback(() => {
    closeAll(showedSnackbars.current);
  }, [closeAll, showedSnackbars]);

  return {
    open,
    openCustom,
    update,
    close,
    closeAll: closeAllSnackbars,
  };
};
