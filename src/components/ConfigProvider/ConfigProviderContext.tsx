import { createContext } from 'react';

export enum Appearance {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum Scheme {
  DEPRECATED_CLIENT_LIGHT = 'client_light',
  DEPRECATED_CLIENT_DARK = 'client_dark',
  BRIGHT_LIGHT = 'bright_light',
  SPACE_GRAY = 'space_gray',
}

export enum WebviewType {
  VKAPPS = 'vkapps',
  INTERNAL = 'internal',
}

export interface ConfigProviderContextInterface {
  scheme?: Scheme;
  isWebView?: boolean;
  webviewType?: WebviewType;
  app?: string;
  appearance?: Appearance;
}

export const ConfigProviderContext = createContext<ConfigProviderContextInterface>({});
