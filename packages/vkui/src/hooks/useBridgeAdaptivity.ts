import * as React from 'react';
import vkBridge from '@vkontakte/vk-bridge';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export interface BridgeAdaptivity {
  type: '' | 'force_mobile' | 'force_mobile_compact' | 'adaptive';
  viewportWidth: number;
  viewportHeight: number;
}

interface BridgeEvent {
  detail: {
    type: string;
    data: {
      [index: string]: any;
    };
  };
}

let initialState: BridgeAdaptivity = {
  type: '',
  viewportWidth: 0,
  viewportHeight: 0,
};

function resolveAdaptivity(data: any): BridgeAdaptivity | null {
  const { adaptivity, viewport_width, viewport_height } = data;

  const bridgeAdaptivity: BridgeAdaptivity = {
    type: '',
    viewportWidth: isFinite(viewport_width) ? Number(viewport_width) : 0,
    viewportHeight: isFinite(viewport_height) ? Number(viewport_height) : 0,
  };

  switch (adaptivity) {
    case 'force_mobile':
    case 'force_mobile_compact':
    case 'adaptive':
      bridgeAdaptivity.type = adaptivity;
  }

  return bridgeAdaptivity;
}

/**
 * TODO [>=6]: удалить хук (#5049)
 * @deprecated v5.8.0
 */
export function useBridgeAdaptivity(disable = false): BridgeAdaptivity {
  const [bridgeAdaptivity, setBridgeAdaptivity] = React.useState<BridgeAdaptivity>(initialState);

  useIsomorphicLayoutEffect(() => {
    if (disable) {
      return;
    }

    const updateAdaptivity = (data: any) => {
      if (!('adaptivity' in data) || !('viewport_width' in data) || !('viewport_height' in data)) {
        return;
      }

      const newAdaptivity = resolveAdaptivity(data);

      if (newAdaptivity) {
        setBridgeAdaptivity(newAdaptivity);
      }
    };

    const handleBridgeEvent = (event: BridgeEvent) => {
      const { type, data } = event.detail;

      if (type !== 'VKWebAppUpdateConfig') {
        return;
      }

      updateAdaptivity(data);
    };

    vkBridge.subscribe(handleBridgeEvent);
    vkBridge.send('VKWebAppGetConfig').then(updateAdaptivity).catch(console.error);

    return () => {
      vkBridge.unsubscribe(handleBridgeEvent);
    };
  }, []);

  return bridgeAdaptivity;
}
