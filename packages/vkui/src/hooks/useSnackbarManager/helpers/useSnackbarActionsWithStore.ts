import * as React from 'react';
import { randomUUID } from '../../../lib/randomUUID';
import { SnackbarWrapper } from '../components/SnackbarWrapper';
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

const resolveProps = <AdditionalProps extends object>(
  props:
    | CustomSnackbar.Payload<AdditionalProps>
    | React.ComponentType<CustomSnackbar.Props<AdditionalProps>>,
): CustomSnackbar.Payload<AdditionalProps> => {
  if ('component' in props) {
    return props;
  }
  return {
    component: props,
  };
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

  const onOpenSnackbarImpl = React.useCallback(
    (item: CommonOnOpenPayload): SnackbarApi.OpenReturn => {
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

      const id = item.id;

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
        close: () => close(id),
        update: (newProps) => update(id, newProps),
        onClose: <R>(resolve?: () => R) => {
          return promise.then(resolve);
        },
      };
    },
    [close, store, update],
  );

  const openCustom: SnackbarApi.Api['openCustom'] = React.useCallback(
    (config) => {
      const resolvedProps = resolveProps(config);

      const id = resolvedProps.id || randomUUID();

      return onOpenSnackbarImpl({
        id,
        component: resolvedProps.component,
        snackbarProps: resolvedProps.baseProps,
        additionalProps: resolvedProps.additionalProps,
        close: () => close(id),
        update: (newProps) => update(id, newProps),
      });
    },
    [close, onOpenSnackbarImpl, update],
  );

  const open: SnackbarApi.Api['open'] = React.useCallback(
    (config) => {
      return openCustom({
        id: config.id,
        component: SnackbarWrapper,
        baseProps: config,
      });
    },
    [openCustom],
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
