import { useEffect, useState } from 'react';
import vkBridge from '@vkontakte/vk-bridge';
import { InsetsType } from '../types';

let initialState: InsetsType = {
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

function resolveInsets(e: BridgeEvent): InsetsType | null {
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

vkBridge.subscribe((e: BridgeEvent) => {
  const insets = resolveInsets(e);
  if (insets) {
    initialState = insets;
  }
});

export default function useInsets(): InsetsType {
  const [insets, setInsets] = useState<InsetsType>(initialState);

  useEffect(() => {
    function connectListener(e: BridgeEvent) {
      const insets = resolveInsets(e);
      if (insets) {
        setInsets(insets);
      }
    }

    vkBridge.subscribe(connectListener);
    return () => {
      vkBridge.unsubscribe(connectListener);
    };
  }, []);

  return insets;
}
