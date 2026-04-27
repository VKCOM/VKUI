import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { getDOM } from '../../lib/dom';
import { DEFAULT_LIMIT, DEFAULT_QUEUE_STRATEGY } from './constants';
import { createSnackbarActions } from './helpers/createSnackbarActions';
import { createSnackbarStore, type SnackbarStore } from './helpers/createSnackbarStore';
import { getIsDesktop } from './helpers/useIsDesktop';
import type { SnackbarApi, SnackbarManagerNS } from './types';

export const AUTO_MOUNT_HOLDER_ATTR = 'data-vkui-snackbar-manager-holder';

type SnackbarManagerRoot = ReturnType<typeof createRoot>;
const autoHolderRoots = new WeakMap<HTMLElement, SnackbarManagerRoot>();

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
  registerHolder: () => void;
  unregisterHolder: () => void;
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

  const { document, window } = getDOM();

  let config: SnackbarManagerConfig = {
    limit: options.limit ?? DEFAULT_LIMIT,
    queueStrategy: options.queueStrategy ?? DEFAULT_QUEUE_STRATEGY,
    offsetYStart: options.offsetYStart,
    offsetYEnd: options.offsetYEnd,
    zIndex: options.zIndex,
  };

  const configListeners = new Set<() => void>();

  const notifyConfig = () => {
    configListeners.forEach((listener) => listener());
  };

  const actions = createSnackbarActions(store, {
    getLimit: () => config.limit,
    getQueueStrategy: () => config.queueStrategy,
    getIsDesktop: () => getIsDesktop(window),
  });

  let holderCount = 0;
  let mountCallback: (() => void) | null = null;
  let unmountCallback: (() => void) | null = null;

  const unmountHolder = () => {
    if (unmountCallback) {
      unmountCallback();
      return;
    }
  };

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

  const updateConfig = (newConfig: SnackbarManagerConfig) => {
    config = newConfig;
    notifyConfig();
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
    setLimit: (count) => updateConfig({ ...config, limit: count }),
    setQueueStrategy: (strategy) => updateConfig({ ...config, queueStrategy: strategy }),
    setOffsetYStart: (offset) => updateConfig({ ...config, offsetYStart: offset }),
    setOffsetYEnd: (offset) => updateConfig({ ...config, offsetYEnd: offset }),
    setZIndex: (z) => updateConfig({ ...config, zIndex: z }),
    setMountCallback: (cb) => {
      mountCallback = cb;
    },
    setUnmountCallback: (cb) => {
      unmountCallback = cb;
    },
    unmount: unmountHolder,
  };

  internalsMap.set(instance, {
    store,
    getConfig: () => config,
    subscribeConfig: (listener) => {
      configListeners.add(listener);
      return () => configListeners.delete(listener);
    },
    registerHolder: () => {
      holderCount += 1;
    },
    unregisterHolder: () => {
      holderCount = Math.max(0, holderCount - 1);
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
      container.setAttribute(AUTO_MOUNT_HOLDER_ATTR, '');
      document.body.appendChild(container);
      const root = createRoot(container);

      autoHolderRoots.set(container, root);

      root.render(React.createElement(SnackbarManagerHolder));
    });
  };
}

function getDefaultUnmountCallback(): () => void {
  return function unmount() {
    const { document } = getDOM();
    if (typeof document === 'undefined') {
      return;
    }
    // eslint-disable-next-line no-restricted-properties
    const container = document.querySelector<HTMLElement>(`[${AUTO_MOUNT_HOLDER_ATTR}]`);
    if (!container) {
      return;
    }

    const root = autoHolderRoots.get(container);
    if (root) {
      root.unmount();
      autoHolderRoots.delete(container);
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };
}

export const snackbarManager: SnackbarManagerNS.Instance = createSnackbarManager();

snackbarManager.setMountCallback(getDefaultMountCallback());
snackbarManager.setUnmountCallback(getDefaultUnmountCallback());
