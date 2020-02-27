import { createContext } from 'react';
import vkBridge from '@vkontakte/vk-bridge';

export interface ConfigProviderContextInterface {
  scheme?: 'client_light' | 'client_dark' | 'bright_light' | 'space_gray';
  isWebView?: boolean;
  webviewType?: 'vkapps' | 'internal';
  app?: string;
}

const ConfigProviderContext = createContext<ConfigProviderContextInterface>({
  webviewType: 'internal',
  isWebView: vkBridge.isWebView(),
  scheme: 'bright_light',
});

export default ConfigProviderContext;
