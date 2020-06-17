import { useEffect, useState } from 'react';
import vkBridge, { Insets } from '@vkontakte/vk-bridge';

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

vkBridge.subscribe((e: BridgeEvent) => {
  const insets = resolveInsets(e);
  if (insets) {
    const htmlElement = window.document.documentElement;
    for (let key in insets) {
      if (insets.hasOwnProperty(key) && insets[key as keyof Insets] > 0) {
        htmlElement.style.setProperty(`--safe-area-inset-${key}`, `${insets[key as keyof Insets]}px`);
      }
    }
    initialState = insets;
  }
});

export default function useInsets(): Insets {
  const [insets, setInsets] = useState<Insets>(initialState);

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
