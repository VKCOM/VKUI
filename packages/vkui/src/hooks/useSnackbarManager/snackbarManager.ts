import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { getDOM } from '../../lib/dom';
import { DEFAULT_LIMIT, DEFAULT_QUEUE_STRATEGY } from './constants';
import { createSnackbarActions } from './helpers/createSnackbarActions';
import { createSnackbarStore, type SnackbarStore } from './helpers/createSnackbarStore';
import type { SnackbarApi, SnackbarManagerNS } from './types';

export type SnackbarManagerConfig = {
  limit: number;
  queueStrategy: SnackbarApi.QueueStrategy;
  offsetYStart: SnackbarApi.OffsetY | undefined;
  offsetYEnd: SnackbarApi.OffsetY | undefined;
  zIndex: number | string | undefined;
};

type SnackbarManagerInternals = {
  store: SnackbarStore;
  getConfig: () => SnackbarManagerConfig;
  subscribeConfig: (listener: () => void) => () => void;
  setIsDesktop: (isDesktop: boolean) => void;
  registerHolder: () => void;
  unregisterHolder: () => void;
  setMountCallback: (callback: (() => void) | null) => void;
};

const internalsMap = new WeakMap<SnackbarApi.Api, SnackbarManagerInternals>();

/** @internal */
export function getSnackbarManagerInternals(manager: SnackbarApi.Api): SnackbarManagerInternals {
  const internals = internalsMap.get(manager);
  if (!internals) {
    throw new Error(
      process.env.NODE_ENV === 'production'
        ? 'VKUI: invalid SnackbarManager'
        : 'VKUI: the provided manager was not created by createSnackbarManager()',
    );
  }
  return internals;
}

export function createSnackbarManager(
  options: SnackbarManagerNS.Options = {},
): SnackbarManagerNS.Instance {
  const store = createSnackbarStore();

  const { document } = getDOM();

  let config: SnackbarManagerConfig = {
    limit: options.limit ?? DEFAULT_LIMIT,
    queueStrategy: options.queueStrategy ?? DEFAULT_QUEUE_STRATEGY,
    offsetYStart: options.offsetYStart,
    offsetYEnd: options.offsetYEnd,
    zIndex: options.zIndex,
  };

  let isDesktop = false;

  const configListeners = new Set<() => void>();

  const notifyConfig = () => {
    configListeners.forEach((listener) => listener());
  };

  const actions = createSnackbarActions(store, {
    getLimit: () => config.limit,
    getQueueStrategy: () => config.queueStrategy,
    getIsDesktop: () => isDesktop,
  });

  let holderCount = 0;
  let mountCallback: (() => void) | null = null;

  const ensureHolderMounted = () => {
    if (typeof document === 'undefined') {
      return;
    }
    if (holderCount > 0) {
      return;
    }
    if (mountCallback) {
      const cb = mountCallback;
      mountCallback = null;
      cb();
    }
  };

  const instance: SnackbarManagerNS.Instance = {
    open: (config) => {
      ensureHolderMounted();
      return actions.open(config);
    },
    openCustom: (config) => {
      ensureHolderMounted();
      return actions.openCustom(config);
    },
    update: actions.update,
    close: actions.close,
    closeAll: actions.closeAll,
    setLimit: (count) => {
      config = { ...config, limit: count };
      notifyConfig();
    },
    setQueueStrategy: (strategy) => {
      config = { ...config, queueStrategy: strategy };
      notifyConfig();
    },
    setOffsetYStart: (offset) => {
      config = { ...config, offsetYStart: offset };
      notifyConfig();
    },
    setOffsetYEnd: (offset) => {
      config = { ...config, offsetYEnd: offset };
      notifyConfig();
    },
    setZIndex: (z) => {
      config = { ...config, zIndex: z };
      notifyConfig();
    },
  };

  internalsMap.set(instance, {
    store,
    getConfig: () => config,
    subscribeConfig: (listener) => {
      configListeners.add(listener);
      return () => configListeners.delete(listener);
    },
    setIsDesktop: (value) => {
      isDesktop = value;
    },
    registerHolder: () => {
      holderCount += 1;
    },
    unregisterHolder: () => {
      holderCount = Math.max(0, holderCount - 1);
    },
    setMountCallback: (cb) => {
      mountCallback = cb;
    },
  });

  return instance;
}

function getDefaultMountCallback(): () => void {
  return function mount() {
    const { document } = getDOM();
    if (typeof document === 'undefined') {
      return;
    }
    // Динамический импорт нужен, чтобы предотвратить циклическую зависимость
    void import('./components/SnackbarManagerHolder').then(({ SnackbarManagerHolder }) => {
      const container = document.createElement('div');
      container.setAttribute('data-vkui-snackbar-manager-holder', '');
      document.body.appendChild(container);
      const root = createRoot(container);
      root.render(React.createElement(SnackbarManagerHolder));
    });
  };
}

export const snackbarManager: SnackbarManagerNS.Instance = createSnackbarManager();

getSnackbarManagerInternals(snackbarManager).setMountCallback(getDefaultMountCallback());
