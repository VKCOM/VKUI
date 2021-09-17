import * as React from 'react';
import vkBridge, { AppearanceSchemeType, AppearanceType } from '@vkontakte/vk-bridge';
import { PlatformType, platform } from '../../lib/platform';

export enum Appearance {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum Scheme {
  DEPRECATED_CLIENT_LIGHT = 'client_light',
  DEPRECATED_CLIENT_DARK = 'client_dark',
  BRIGHT_LIGHT = 'bright_light',
  SPACE_GRAY = 'space_gray',
  VKCOM = 'vkcom'
}

// Схемы, которых нет в VKUI, но мы знаем их appearance
export enum ExternalScheme {
  VKCOM_LIGHT = 'vkcom_light',
  VKCOM_DARK = 'vkcom_dark'
}

export type AppearanceScheme = AppearanceSchemeType | Scheme.VKCOM | 'inherit';

export enum WebviewType {
  VKAPPS = 'vkapps',
  INTERNAL = 'internal',
}

export interface ConfigProviderContextInterface {
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
  /**
   * Платформа
   */
  platform?: PlatformType;
}

export const defaultConfigProviderProps = {
  webviewType: WebviewType.VKAPPS,
  isWebView: vkBridge.isWebView(),
  scheme: Scheme.BRIGHT_LIGHT,
  transitionMotionEnabled: true,
  platform: platform(),
  // appearance is auto-detected by default
  // appearance: Appearance.LIGHT,
};

export const ConfigProviderContext = React.createContext<ConfigProviderContextInterface>(defaultConfigProviderProps);
