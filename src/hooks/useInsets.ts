import { useEffect, useState } from 'react';
import vkConnect from '@vkontakte/vk-connect';
import { InsetsInterface } from './../types/props';

let initialState: InsetsInterface = {
  bottom: null,
  top: null,
  left: null,
  right: null
};

function resolveInsets(e): InsetsInterface | null {
  const { type, data } = e.detail;
  switch (type) {
    case 'VKWebAppUpdateConfig':
    case 'VKWebAppUpdateInsets': // Устаревшее событие vk-connect
      const { insets } = data;
      if (insets) {
        return {
          ...insets,
          bottom: insets.bottom > 150 ? 0 : insets.bottom // если больше 150 – значит открылась клава и она сама работает как инсет, то есть наш нужно занулить
        };
      }
  }
  return null;
}

vkConnect.subscribe((e) => {
  const insets = resolveInsets(e);
  if (insets) {
    initialState = insets;
  }
});

export default function useInsets(): InsetsInterface {
  const [insets, setInsets] = useState<InsetsInterface>(initialState);

  useEffect(() => {
    function connectListener(e) {
      const insets = resolveInsets(e);
      if (insets) {
        setInsets(insets);
      }
    }

    vkConnect.subscribe(connectListener);
    return () => {
      vkConnect.unsubscribe(connectListener);
    };
  }, []);

  return insets;
}
