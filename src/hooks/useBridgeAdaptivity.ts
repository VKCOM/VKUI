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

function resolveAdaptivity(e: BridgeEvent): BridgeAdaptivity | null {
  const { type, data } = e.detail;

  if (type !== 'VKWebAppUpdateConfig' || !data) {
    return null;
  }

  const { adaptivity, viewport_width: viewportWidth, viewport_height: viewportHeight } = data;

  const bridgeAdaptivity: BridgeAdaptivity = {
    type: '',
    viewportWidth: isFinite(viewportWidth) ? +viewportWidth : 0,
    viewportHeight: isFinite(viewportHeight) ? +viewportHeight : 0,
  };

  switch (adaptivity) {
    case 'force_mobile':
    case 'force_mobile_compact':
    case 'adaptive':
      bridgeAdaptivity.type = adaptivity;
  }

  return bridgeAdaptivity;
}

vkBridge.subscribe((e: BridgeEvent) => {
  const bridgeAdaptivity = resolveAdaptivity(e);

  if (bridgeAdaptivity) {
    initialState = bridgeAdaptivity;
  }
});

export function useBridgeAdaptivity(): BridgeAdaptivity {
  const [bridgeAdaptivity, setBridgeAdaptivity] = React.useState<BridgeAdaptivity>(initialState);

  useIsomorphicLayoutEffect(() => {
    function bridgeListener(e: BridgeEvent) {
      const newBridgeAdaptivity = resolveAdaptivity(e);

      if (newBridgeAdaptivity) {
        setBridgeAdaptivity(newBridgeAdaptivity);
      }
    }

    vkBridge.subscribe(bridgeListener);
    return () => {
      vkBridge.unsubscribe(bridgeListener);
    };
  }, []);

  return bridgeAdaptivity;
}
