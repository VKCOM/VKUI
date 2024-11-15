'use client';

import * as React from 'react';
import { useKeyboardInputTracker } from '../../hooks/useKeyboardInputTracker';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { useSyncHTMLWithBaseVKUIClasses } from '../../hooks/useSyncHTMLWithBaseVKUIClasses';
import { useSyncHTMLWithTokens } from '../../hooks/useSyncHTMLWithTokens';
import { getDocumentBody } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { AppRootContext } from './AppRootContext';
import { AppRootStyleContainer } from './AppRootStyleContainer';
import { ElementScrollController, GlobalScrollController } from './ScrollContext';
import { extractPortalRootByProp } from './helpers';
import type {
  AppRootLayout,
  AppRootMode,
  AppRootScroll,
  AppRootUserSelectMode,
  SafeAreaInsets,
} from './types';
import styles from './AppRoot.module.css';

export interface AppRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Режим встраивания */
  mode?: AppRootMode;
  /**
   * - `global` (по умолчанию) — VKUI-приложение скроллится вместе со страницей.
   * - `contain` — VKUI-приложение живет в отдельной зоне и скроллится независимо внутри `AppRoot` (например, в модалке).
   *
   * Полезно при использовании `mode="embedded"`.
   */
  scroll?: AppRootScroll;
  /**
   * см. документацию [mdn web docs | env#values](https://developer.mozilla.org/en-US/docs/Web/CSS/env#values).
   */
  safeAreaInsets?: SafeAreaInsets;
  /**
   * Кастомный root-элемент портала
   */
  portalRoot?: HTMLElement | React.RefObject<HTMLElement> | null;
  /**
   * Отключает рендер всплывающих компонентов в отдельном контейнере
   */
  disablePortal?: boolean;
  /**
   * По умолчанию, mode="embedded" переносит систему координат элементов с `position: fixed` на
   * свой контейнер через `transform: translate3d(0, 0, 0)`.
   *
   * Это поведение можно отключить с помощью этого параметра.
   */
  disableParentTransformForPositionFixedElements?: boolean;
  /**
   * Глобально задаёт тип оформления макета для компонентов
   * [Panel](https://vkcom.github.io/VKUI/#/Panel) и [Group](https://vkcom.github.io/VKUI/#/Group).
   */
  layout?: AppRootLayout;
  /**
   * Задаёт режим выбора текста (выделения текста) для всего приложения.
   * По умолчанию, если режим не задан, запрещает выбор текста в приложениях,
   * запущенных в webview (по значению свойства `isWebView` из [ConfigProvider](https://vkcom.github.io/VKUI/#/ConfigProvider)).
   *
   * - `enabled-with-pointer` – разрешает выбор текста, если устройство ввода типа `pointer` (например, `мышь`), в остальных случаях запрещает;
   * - `disabled` – запрещает выбор текста;
   * - `enabled` – разрешает выбор текста.
   *
   * @since 6.2.0
   */
  userSelectMode?: AppRootUserSelectMode;
  /*
   * По умолчанию в режиме `mode="full"` VKUI в рантайме выставляет:
   * - класс .vkui на html элемент
   * - класс .vkui__root на элемент-контейнер, в который монтируется VKUI
   * С помощью этой опции такое поведение можно отключить.
   *
   * Для корректной работы SSR рекоммендуется выставлять эти классы самостоятельно
   * и отключить это поводение.
   */
  disableSettingVKUIClassesInRuntime?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/AppRoot
 */
export const AppRoot = ({
  children,
  mode = 'full',
  scroll = 'global',
  portalRoot: portalRootProp = null,
  disablePortal = false,
  disableParentTransformForPositionFixedElements,
  safeAreaInsets: safeAreaInsetsProp,
  layout,
  userSelectMode,
  disableSettingVKUIClassesInRuntime,
  ...props
}: AppRootProps): React.ReactNode => {
  const appRootRef = React.useRef<HTMLDivElement | null>(null);
  const popoutModalContainerRef = React.useRef<HTMLDivElement | null>(null);
  const portalRootRef = React.useRef<HTMLElement | null>(
    portalRootProp ? extractPortalRootByProp(portalRootProp) : null,
  );

  useIsomorphicLayoutEffect(function removePortalRootOnUnmount() {
    // Контейнер PortalRoot создаётся при первом вызове модалки или
    // поповера использующего AppRootPortal.
    // Потом он переиспользуется и не удаляется пока
    // приложение не размонтируется.
    // И создаётся только если в приложение не был передан
    // пользовательский контейнер контейнер через свойство portalRootProp
    // Сделано для поддержки SSR, чтобы при старте приложения
    // никаких новых нод в DOM не создавалось.
    const documentBody = getDocumentBody(appRootRef.current);
    return function cleanup() {
      if (portalRootRef.current) {
        const isPortalRootPassedByProps = Boolean(portalRootProp);
        if (!isPortalRootPassedByProps) {
          // удаляем portalRoot из дома только если он
          // был создан в AppRootPortal.
          // Если он был передан через пропы - удалять нельзя
          documentBody.removeChild(portalRootRef.current);
        }
        portalRootRef.current = null;
      }
    };
  }, []);

  const ScrollController = React.useMemo(
    () => (scroll === 'contain' ? ElementScrollController : GlobalScrollController),
    [scroll],
  );

  const isKeyboardInputActiveRef = useKeyboardInputTracker();
  const safeAreaInsets = useObjectMemo(safeAreaInsetsProp);
  const contextValue = React.useMemo(
    () => ({
      appRoot: appRootRef,
      portalRoot: portalRootRef,
      popoutModalRoot: popoutModalContainerRef,
      setPortalRoot: (element: HTMLElement) => (portalRootRef.current = element),
      safeAreaInsets,
      embedded: mode === 'embedded',
      mode,
      disablePortal,
      layout,
      get keyboardInput() {
        return isKeyboardInputActiveRef.current;
      },
      userSelectMode,
    }),
    [disablePortal, isKeyboardInputActiveRef, layout, mode, safeAreaInsets, userSelectMode],
  );

  /*
   * Вешаем класс токенов на html в режиме full.
   * Это необходимо, чтобы цвета html элемента и скроллбара соответствовали текущей цветовой схеме:
   * - фон html элемента виден, если пользователь оверскролит. Тогда возникает анимация bounce-эффекта и виден фон html элемента. Без токенов в черной теме будет выглядывать белый фон.
   * - цвет системного сколлбара зависит от color-sheme свойства, значение которого задётся токенами и должно быть выставлено именно на html элементе.
   * В режме SSR пользователи сами могу задать этот класс на html-элементе. главное, чтобы он соответствовал переданным platform и appearence свойствам.
   */
  useSyncHTMLWithTokens({ appRootRef, enable: mode === 'full' });
  /*
   * По умолчанию VKUI будет выставлять .vkui на html и .vkui__root на контейнере в режиме full.
   * В режиме embedded будет выставлять только .vkui__root на контейнере.
   */
  useSyncHTMLWithBaseVKUIClasses({
    appRootRef,
    mode,
    enable: mode !== 'partial' && !disableSettingVKUIClassesInRuntime,
  });

  return mode === 'partial' ? (
    <AppRootContext.Provider value={contextValue}>
      <ScrollController elRef={appRootRef}>{children}</ScrollController>
    </AppRootContext.Provider>
  ) : (
    <AppRootContext.Provider value={contextValue}>
      <AppRootStyleContainer
        getRootRef={appRootRef}
        className={
          mode === 'embedded' && !disableParentTransformForPositionFixedElements
            ? styles.transformForPositionFixedElements
            : undefined
        }
        {...props}
      >
        <ScrollController elRef={appRootRef}>{children}</ScrollController>
      </AppRootStyleContainer>
    </AppRootContext.Provider>
  );
};
