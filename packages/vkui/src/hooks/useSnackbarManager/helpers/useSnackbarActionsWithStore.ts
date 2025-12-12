import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  type CommonOnOpenPayload,
  type CustomSnackbar,
  type SnackbarApi,
  type SnackbarPlacement,
} from '../types';
import type { SnackbarStore } from './createSnackbarStore';

const resolveMobilePlacement = (
  placement: SnackbarPlacement,
): Extract<SnackbarPlacement, 'top' | 'bottom-start'> => {
  if (placement.startsWith('top')) {
    return 'top';
  }
  return 'bottom-start';
};

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
}: UseSnackbarActionsWithStoreProps) => {
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

  const onOpenSnackbarImpl = React.useCallback(
    (item: CommonOnOpenPayload): SnackbarApi.OpenSnackbarReturn => {
      const placement: SnackbarPlacement = item.snackbarProps?.placement || 'bottom-start';
      const resolvedPlacement = isDesktopRef.current
        ? placement
        : resolveMobilePlacement(placement);

      const placementSnackbars = store.getSnackbarsByPlacement(resolvedPlacement, limitRef.current);

      const withOverflow =
        queueStrategyRef.current === 'shift' && placementSnackbars.length >= limitRef.current;

      let resolvePromise: () => void;
      const promise = new Promise<void>((resolve) => {
        resolvePromise = resolve;
      });

      const id = item.id || uuidv4();

      if (withOverflow) {
        store.closeOverflowedSnackbars(placementSnackbars);
      }

      store.addSnackbar({
        ...item,
        id,
        snackbarProps: {
          ...item.snackbarProps,
          id,
          placement: resolvedPlacement,
          onClosed: () => {
            resolvePromise!();
            item.snackbarProps?.onClosed?.();
          },
        },
      });

      return {
        id,
        close: () => {
          if (store.showedSnackbars.has(id)) {
            store.closeSnackbar(id);
          } else {
            store.removeSnackbar(id);
          }
        },
        update: (newProps) => store.updateSnackbar(id, newProps),
        onClose: <R>(resolve?: () => R) => {
          return promise.then(resolve);
        },
      };
    },
    [store],
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
      store.updateSnackbar(id, config);
    },
    [store],
  );

  const close: SnackbarApi.Api['close'] = React.useCallback(
    (id) => {
      if (store.showedSnackbars.has(id)) {
        store.closeSnackbar(id);
      } else {
        store.removeSnackbar(id);
      }
    },
    [store],
  );

  const closeAllSnackbars: SnackbarApi.Api['closeAll'] = React.useCallback(() => {
    store.closeAll(store.showedSnackbars);
  }, [store]);

  return {
    open,
    openCustom,
    update,
    close,
    closeAll: closeAllSnackbars,
  };
};
