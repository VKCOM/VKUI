import { createContext } from 'react';
import { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';

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
  /**
   * Цветовая схема приложения
   */
  scheme?: AppearanceSchemeType;
  /**
   * Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере
   */
  isWebView?: boolean;
  /**
   * Тип вебвью.<br>
   * В случае `WebviewType.VKAPPS` интерфейс будет адаптирован для отображения в вебвью Mini Apps (системные контролы в правой части шапки)
   */
  webviewType?: WebviewType.INTERNAL | WebviewType.VKAPPS;
  /**
   * Тип приложения
   */
  app?: string;
  /**
   * Тип цветовой схемы – `light` или `dark`
   */
  appearance?: AppearanceType;
  /**
   * Включена ли анимация переходов между экранами в `Root` и `View`
   */
  transitionMotionEnabled?: boolean;
}

export const ConfigProviderContext = createContext<ConfigProviderContextInterface>({});
