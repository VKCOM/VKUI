import * as React from 'react';
import { AppearanceProvider } from '../AppearanceProvider/AppearanceProvider';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  useConfigProvider,
} from './ConfigProviderContext';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { useAutoDetectAppearance } from '../../hooks/useAutoDetectAppearance';
import { noop } from '@vkontakte/vkjs';

export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
  onDetectAppearanceByBridge?: () => void;
  children: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ConfigProvider
 */
export const ConfigProvider = (props: ConfigProviderProps) => {
  const parentConfig = useConfigProvider();

  const {
    children,
    webviewType,
    isWebView,
    transitionMotionEnabled,
    platform,
    locale,
    appearance: appearanceProp,
    onDetectAppearanceByBridge = noop,
  } = {
    ...parentConfig,
    ...props,
  };

  const appearance = useAutoDetectAppearance(appearanceProp, onDetectAppearanceByBridge);

  const configContext = useObjectMemo({
    webviewType,
    isWebView,
    transitionMotionEnabled,
    platform,
    locale,
    appearance,
  });

  return (
    <ConfigProviderContext.Provider value={configContext}>
      <AppearanceProvider appearance={appearance}>{children}</AppearanceProvider>
    </ConfigProviderContext.Provider>
  );
};
