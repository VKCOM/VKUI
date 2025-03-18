'use client';

import * as React from 'react';
import type { ColorSchemeType } from '../../lib/colorScheme';
import { type Direction } from '../../lib/direction';
import { platform, type PlatformType } from '../../lib/platform';
import { DEFAULT_TOKENS_CLASS_NAMES } from '../../lib/tokens/constants';
import { type TokensClassNames } from '../../lib/tokens/types';

export interface ConfigProviderContextInterface {
  /**
   * Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере.
   *
   * В условиях когда:
   * - `isWebView={true}`
   * - platform="ios"
   *
   * для компонента `View` включается возможность навигации через смахивание.
   */
  isWebView: boolean;
  /**
   * При `true` слот `after` у `PanelHeader` игнорируется под размещение пользовательского
   * "плавающего" элемента (например, панель управления webview).
   *
   * > Note: Правило не распространяется на `PanelHeader` внутри модальных окон, предоставляемых
   * > библиотекой.
   */
  hasCustomPanelHeaderAfter: boolean;
  /**
   * Задаёт необходимый минимальную ширину слота `after` в `PanelHeader` под пользовательский
   * "плавающий" элемент (например, ширина панели управления webview).
   *
   * Учитывается только при `hasCustomPanelHeaderAfter={true}` (см. документацию `hasCustomPanelHeaderAfter`).
   *
   * @default 90
   */
  customPanelHeaderAfterMinWidth: number | string;
  /**
   * Тип цветовой схемы – `light` или `dark`
   */
  colorScheme: ColorSchemeType | undefined;
  /**
   * Включена ли анимация переходов между экранами в `Root` и `View`
   */
  transitionMotionEnabled: boolean;
  /**
   * Платформа
   */
  platform: PlatformType;
  /**
   * CSS классы, определяющие набор токенов.
   *
   * - Используйте `{ light?: '<css_class>', dark?: '<css_class>' }`, чтобы задать для всех платформ одинаковый набор токенов для светлой и/или тёмной тем.
   * - Используйте `{ [key in 'android' | 'ios' | 'vkcom']?: '<css_class>' }`, чтобы задать для одной или нескольких платформ свой набор токенов.
   *
   * @default
   * {
   *   android: {
   *     light: 'vkui--vkBase--light',
   *     dark: 'vkui--vkBase--dark',
   *   },
   *   ios: {
   *     light: 'vkui--vkIOS--light',
   *     dark: 'vkui--vkIOS--dark',
   *   },
   *   vkcom: {
   *     light: 'vkui--vkCom--light',
   *     dark: 'vkui--vkCom--dark',
   *   }
   * }
   */
  tokensClassNames: TokensClassNames;
  /**
   * Строка с языковой меткой BCP 47
   */
  locale: string;
  /**
   * Направление контента.
   *
   * При использовании определенного значения, важно установить атрибут `dir` с таким же значением либо на дочерний элемент,
   * либо на все страницу в целом.
   *
   * @default Определяется автоматически в зависимости от значения атрибута `dir` установленного на `body` страницы
   */
  direction: Direction | undefined;
}

export const ConfigProviderContext: React.Context<ConfigProviderContextInterface> =
  React.createContext<ConfigProviderContextInterface>({
    hasCustomPanelHeaderAfter: false,
    customPanelHeaderAfterMinWidth: 90,
    isWebView: false,
    transitionMotionEnabled: true,
    platform: platform(),
    colorScheme: undefined, // undefined обозначает что тема должна определиться автоматически
    tokensClassNames: DEFAULT_TOKENS_CLASS_NAMES,
    locale: 'ru',
    direction: undefined,
  });

export const useConfigProvider = (): ConfigProviderContextInterface =>
  React.useContext(ConfigProviderContext);

export function useConfigProviderContextMemo(config: ConfigProviderContextInterface) {
  const {
    isWebView,
    hasCustomPanelHeaderAfter,
    customPanelHeaderAfterMinWidth,
    colorScheme,
    transitionMotionEnabled,
    platform,
    tokensClassNames,
    locale,
    direction,
  } = config;

  return React.useMemo<ConfigProviderContextInterface>(() => {
    return {
      isWebView,
      hasCustomPanelHeaderAfter,
      customPanelHeaderAfterMinWidth,
      colorScheme,
      transitionMotionEnabled,
      platform,
      tokensClassNames,
      locale,
      direction,
    };
  }, [
    isWebView,
    hasCustomPanelHeaderAfter,
    customPanelHeaderAfterMinWidth,
    colorScheme,
    transitionMotionEnabled,
    platform,
    tokensClassNames,
    locale,
    direction,
  ]);
}
