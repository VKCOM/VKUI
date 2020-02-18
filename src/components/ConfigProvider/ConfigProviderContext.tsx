import { createContext } from 'react';
import vkConnect from '@vkontakte/vk-connect';

export interface ConfigProviderContextInterface {
  scheme?: 'client_light' | 'client_dark' | 'bright_light' | 'space_gray';
  isWebView?: boolean;
  webviewType?: 'vkapps' | 'internal';
  app?: string;
}

const ConfigProviderContext = createContext<ConfigProviderContextInterface>({
  webviewType: 'internal',
  isWebView: vkConnect.isWebView(),
  scheme: 'bright_light',
});

export default ConfigProviderContext;
