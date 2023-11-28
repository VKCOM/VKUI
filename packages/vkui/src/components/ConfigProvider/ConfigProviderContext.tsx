import * as React from 'react';
import type { AppearanceType } from '../../lib/appearance';
import { platform, PlatformType } from '../../lib/platform';

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
  appearance: AppearanceType | undefined;
  /**
   * Включена ли анимация переходов между экранами в `Root` и `View`
   */
  transitionMotionEnabled: boolean;
  /**
   * Платформа
   */
  platform: PlatformType;
  /**
   * Строка с языковой меткой BCP 47
   */
  locale: string;
}

export const ConfigProviderContext = React.createContext<ConfigProviderContextInterface>({
  hasCustomPanelHeaderAfter: false,
  customPanelHeaderAfterMinWidth: 90,
  isWebView: false,
  transitionMotionEnabled: true,
  platform: platform(),
  appearance: undefined, // undefined обозначает что тема должна определиться автоматически
  locale: 'ru',
});

export const useConfigProvider = () => React.useContext(ConfigProviderContext);
