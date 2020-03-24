import { createContext } from 'react';

enum AppearanceList {
  DARK = 'dark',
  LIGHT = 'light'
}

export type AppearanceType = AppearanceList.DARK | AppearanceList.LIGHT;

export const APPEARANCE_DARK = AppearanceList.DARK;
export const APPEARANCE_LIGHT = AppearanceList.LIGHT;

export interface ConfigProviderContextInterface {
  scheme?: 'client_light' | 'client_dark' | 'bright_light' | 'space_gray';
  isWebView?: boolean;
  webviewType?: 'vkapps' | 'internal';
  app?: string;
  appearance?: AppearanceType;
}

export const ConfigProviderContext = createContext<ConfigProviderContextInterface>({});
