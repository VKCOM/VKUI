import type * as React from 'react';
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

const resolveCustomPayload = <AdditionalProps extends object>(
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

export type SnackbarActionsConfig = {
  getLimit: () => number;
  getQueueStrategy: () => SnackbarApi.QueueStrategy;
  getIsDesktop: () => boolean;
};

export type SnackbarActions = Pick<
  SnackbarApi.Api,
  'open' | 'openCustom' | 'update' | 'close' | 'closeAll'
>;

export const createSnackbarActions = (
  store: SnackbarStore,
  config: SnackbarActionsConfig,
): SnackbarActions => {
  const update: SnackbarApi.Api['update'] = (id, updateConfig) => {
    store.updateSnackbar(id, updateConfig);
  };

  const close: SnackbarApi.Api['close'] = (id) => {
    if (store.showedSnackbars.has(id)) {
      store.closeSnackbar(id);
    } else {
      store.removeSnackbar(id);
    }
  };

  const onOpenSnackbarImpl = (item: CommonOnOpenPayload): SnackbarApi.OpenReturn => {
    const placement: SnackbarPlacement = item.snackbarProps?.placement || 'bottom-start';
    const resolvedPlacement = config.getIsDesktop() ? placement : resolveMobilePlacement(placement);

    const limit = config.getLimit();
    const placementSnackbars = store.getSnackbarsByPlacement(resolvedPlacement, limit);

    const withOverflow =
      config.getQueueStrategy() === 'shift' && placementSnackbars.length >= limit;

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
  };

  const openCustom: SnackbarApi.Api['openCustom'] = (openConfig) => {
    const resolvedProps = resolveCustomPayload(openConfig);
    const id = resolvedProps.id || randomUUID();

    return onOpenSnackbarImpl({
      id,
      component: resolvedProps.component,
      snackbarProps: resolvedProps.baseProps,
      additionalProps: resolvedProps.additionalProps,
      close: () => close(id),
      update: (newProps) => update(id, newProps),
    });
  };

  const open: SnackbarApi.Api['open'] = (openConfig) => {
    return openCustom({
      id: openConfig.id,
      component: SnackbarWrapper,
      baseProps: openConfig,
    });
  };

  const closeAll: SnackbarApi.Api['closeAll'] = () => {
    store.closeAll(store.showedSnackbars);
  };

  return { open, openCustom, update, close, closeAll };
};
