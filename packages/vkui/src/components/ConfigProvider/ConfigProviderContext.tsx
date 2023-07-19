import * as React from 'react';
import vkBridge from '@vkontakte/vk-bridge';
import type { AppearanceType } from '../../lib/appearance';
import { platform, PlatformType } from '../../lib/platform';

/**
 * TODO [>=6]: удалить enum (#5049).
 *
 * @deprecated
 */
export enum WebviewType {
  VKAPPS = 'vkapps',
  INTERNAL = 'internal',
}

export interface ConfigProviderContextInterface {
  /**
   * Подсказывает приложению, обёрнутому в `ConfigProvider`, где открыто приложение: внутри webview или в мобильном браузере.
   *
   * В условиях когда:
   * - `isWebView={true}`
   * - platform="ios"
   *
   * для компонента `View` включается возможность навигации через смахивание.
   *
   * По умолчанию определяется через `bridge.isWebView()`.
   *
   * > ⚠️ В **v6** будет удалена завязка на `@vkontakte/vk-bridge` (см. https://github.com/VKCOM/VKUI/issues/5049).
   * > Если вы используете `@vkontakte/vk-bridge`, то передавать `bridge.isWebView()` необходимо самостоятельно.
   */
  isWebView: boolean; // TODO [>=6]: удалить коммент про v6 @vkontakte/vk-bridge выше
  /**
   * Тип вебвью.<br>
   * В случае `WebviewType.VKAPPS` интерфейс будет адаптирован для отображения в вебвью Mini Apps (системные контролы в правой части шапки)
   *
   * > ⚠️ В **v6** свойство будет удалено (см. https://github.com/VKCOM/VKUI/issues/5049).
   * >
   * > Используете вместо него новые свойства:
   * >
   * > - `webviewType={WebviewType.INTERNAL}` -> `hasCustomPanelHeaderAfter={false}`.
   * > - `webviewType={WebviewType.VKAPPS}` -> `hasCustomPanelHeaderAfter={true}`. При необходимости передайте `customPanelHeaderAfterMinWidth={<value>}` (по умолчанию равен `90`).
   *
   * @deprecated
   */
  webviewType?: WebviewType.INTERNAL | WebviewType.VKAPPS;
  /**
   * При `true` слот `after` у `PanelHeader` игнорируется под размещение пользовательского
   * "плавающего" элемента (например, панель управления webview).
   *
   * > Note: Правило не распространяется на `PanelHeader` внутри модальных окон, предоставляемых
   * > библиотекой.
   *
   * > ⚠️ В **v6** свойство будет по умолчанию `false` (см. https://github.com/VKCOM/VKUI/issues/5049).
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
  // TODO [>=6]: удалить свойство (#5049).
  webviewType: undefined,
  // TODO [>=6]: сделать по умолчанию `false` (#5049).
  hasCustomPanelHeaderAfter: true,
  customPanelHeaderAfterMinWidth: 90,
  // TODO [>=6]: удалить использование vkBridge. Использовать `false` вместо него (#5049).
  isWebView: vkBridge.isWebView(),
  transitionMotionEnabled: true,
  platform: platform(),
  appearance: undefined, // undefined обозначает что тема должна определиться автоматически
  locale: 'ru',
});

export const useConfigProvider = () => React.useContext(ConfigProviderContext);
