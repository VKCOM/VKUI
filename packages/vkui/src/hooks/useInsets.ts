import * as React from 'react';
import vkBridge, { Insets as BridgeInsets } from '@vkontakte/vk-bridge';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export interface Insets {
  bottom: BridgeInsets['bottom'] | null;
  top: BridgeInsets['top'] | null;
  left: BridgeInsets['left'] | null;
  right: BridgeInsets['right'] | null;
}

let initialState: Insets = {
  bottom: null,
  top: null,
  left: null,
  right: null,
};

interface BridgeEvent {
  detail: {
    type: string;
    data: {
      [index: string]: any;
    };
  };
}

function resolveInsets(e: BridgeEvent): Insets | null {
  const { type, data } = e.detail;
  switch (type) {
    case 'VKWebAppUpdateConfig':
    case 'VKWebAppUpdateInsets': // Устаревшее событие vk-bridge
      const { insets } = data;
      if (insets) {
        return {
          ...insets,
          bottom: insets.bottom > 150 ? 0 : insets.bottom, // если больше 150 – значит открылась клава и она сама работает как инсет, то есть наш нужно занулить
        };
      }
  }
  return null;
}

/**
 * TODO [>=6]: удалить хук (#5049)
 * @deprecated v5.8.0
 */
export function useInsets(disabled = false): Insets {
  const [insets, setInsets] = React.useState<Insets>(initialState);

  useIsomorphicLayoutEffect(() => {
    if (disabled) {
      return;
    }

    const handleBridgeEvent = (event: BridgeEvent) => {
      const insets = resolveInsets(event);
      if (insets) {
        setInsets(insets);
      }
    };

    vkBridge.subscribe(handleBridgeEvent);
    return () => {
      vkBridge.unsubscribe(handleBridgeEvent);
    };
  }, [disabled]);

  return insets;
}
