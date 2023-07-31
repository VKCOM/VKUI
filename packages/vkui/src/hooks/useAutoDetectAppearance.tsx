import * as React from 'react';
import vkBridge, {
  AnyReceiveMethodName,
  AppearanceType,
  VKBridgeEvent,
} from '@vkontakte/vk-bridge';
import { noop } from '@vkontakte/vkjs';
import { resolveAppearance, VKBridgeConfigData } from '../helpers/appearance';
import { useDOM } from '../lib/dom';
import { matchMediaListAddListener, matchMediaListRemoveListener } from '../lib/matchMedia';

function autoDetectAppearanceByBridge(
  setAppearance: (value: AppearanceType) => void,
  onDetectAppearanceByBridge: () => void,
) {
  function updateAppearance(data: VKBridgeConfigData) {
    const initialAppearance = resolveAppearance(data);

    if (initialAppearance) {
      onDetectAppearanceByBridge();
      setAppearance(initialAppearance);
    }
  }

  function bridgeListener(e: VKBridgeEvent<AnyReceiveMethodName>) {
    const { type, data } = e.detail;

    if (type !== 'VKWebAppUpdateConfig') {
      return;
    }

    updateAppearance(data as VKBridgeConfigData);
  }

  vkBridge.subscribe(bridgeListener);
  vkBridge.send('VKWebAppGetConfig').then(updateAppearance).catch(console.error);

  return () => vkBridge.unsubscribe(bridgeListener);
}

function autoDetectAppearance(
  window: Window | undefined,
  setAppearance: (value: AppearanceType) => void,
): () => void {
  const mediaQuery =
    window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  if (mediaQuery === undefined) {
    return noop;
  }

  const check = (event: MediaQueryList | MediaQueryListEvent) => {
    // eslint-disable-next-line no-restricted-properties
    setAppearance(event.matches ? 'dark' : 'light');
  };

  check(mediaQuery);
  matchMediaListAddListener(mediaQuery, check);

  return () => matchMediaListRemoveListener(mediaQuery, check);
}

/**
 * TODO [>=6]: удалить хук (#5049)
 * @deprecated v5.8.0
 */
export const useAutoDetectAppearance = (
  appearanceProp?: AppearanceType,
  onDetectAppearanceByBridge?: () => void,
): AppearanceType => {
  const { window } = useDOM();
  const onceDetectAppearanceByBridge = React.useRef(() => {
    onDetectAppearanceByBridge && onDetectAppearanceByBridge();
    onceDetectAppearanceByBridge.current = noop;
  });

  const [appearance, setAppearance] = React.useState<AppearanceType>(() => {
    if (appearanceProp) {
      return appearanceProp;
    }

    const mediaQuery =
      window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    // eslint-disable-next-line no-restricted-properties
    return mediaQuery?.matches ? 'dark' : 'light';
  });

  React.useEffect(() => {
    if (appearanceProp) {
      setAppearance(appearanceProp);
      return noop;
    }

    if (vkBridge.isEmbedded()) {
      return autoDetectAppearanceByBridge(setAppearance, onceDetectAppearanceByBridge.current);
    }

    return autoDetectAppearance(window, setAppearance);
  }, [window, appearanceProp]);

  return appearance;
};
