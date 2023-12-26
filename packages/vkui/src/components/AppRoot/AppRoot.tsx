import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useKeyboardInputTracker } from '../../hooks/useKeyboardInputTracker';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { getDocumentBody } from '../../lib/dom';
import { useTokensClassName } from '../../lib/tokens';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { AppRootContext } from './AppRootContext';
import { ElementScrollController, GlobalScrollController } from './ScrollContext';
import {
  extractPortalRootByProp,
  getClassNamesByMode,
  getParentElement,
  setSafeAreaInsets,
} from './helpers';
import type { AppRootLayout, AppRootMode, AppRootScroll, SafeAreaInsets } from './types';
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
  className,
  safeAreaInsets: safeAreaInsetsProp,
  layout,
  ...props
}: AppRootProps) => {
  const { hasPointer, sizeX = 'none', sizeY = 'none' } = useAdaptivity();
  const tokensClassName = useTokensClassName();

  const safeAreaInsets = useObjectMemo(safeAreaInsetsProp);
  const isKeyboardInputActiveRef = useKeyboardInputTracker();
  const appRootRef = React.useRef<HTMLDivElement | null>(null);
  const portalRootRef = React.useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(
    function setupPortalRoot() {
      const portalByProp = portalRootProp ? extractPortalRootByProp(portalRootProp) : null;

      if (portalByProp) {
        portalRootRef.current = portalByProp;
        return function cleanup() {
          portalRootRef.current = null;
        };
      }

      const documentBody = getDocumentBody(appRootRef.current);
      const portal = documentBody.ownerDocument.createElement('div');
      documentBody.appendChild(portal);
      portalRootRef.current = portal;
      return function cleanup() {
        documentBody.removeChild(portal);
        portalRootRef.current = null;
      };
    },
    [portalRootProp],
  );

  useIsomorphicLayoutEffect(
    function setupContainers() {
      if (!appRootRef.current || !portalRootRef.current) {
        return;
      }

      const parentElement = getParentElement(appRootRef.current);
      const documentBody = getDocumentBody(appRootRef.current);
      const documentElement = documentBody.ownerDocument.documentElement;

      const [baseClassNames, stylesClassNames] = getClassNamesByMode({
        mode,
        layout,
        tokensClassName,
        sizeX,
        sizeY,
      });

      /* eslint-disable no-restricted-properties */
      switch (mode) {
        case 'full': {
          if (parentElement) {
            parentElement.classList.add(...baseClassNames);
          }

          documentElement.classList.add(...stylesClassNames, 'vkui');
          const unsetSafeAreaInsets = setSafeAreaInsets(safeAreaInsets, documentElement);

          return function cleanup() {
            if (parentElement) {
              parentElement.classList.remove(...baseClassNames);
            }

            documentElement.classList.remove(...stylesClassNames, 'vkui');
            unsetSafeAreaInsets();
          };
        }
        case 'embedded': {
          if (parentElement) {
            parentElement.classList.add(...baseClassNames, ...stylesClassNames);
            if (!disableParentTransformForPositionFixedElements) {
              parentElement.style.setProperty('transform', 'translate3d(0, 0, 0)');
            }
            const unsetSafeAreaInsets = setSafeAreaInsets(safeAreaInsets, parentElement, portalRootRef.current); // prettier-ignore
            return function cleanup() {
              parentElement.classList.remove(...baseClassNames, ...stylesClassNames);
              if (!disableParentTransformForPositionFixedElements) {
                parentElement.style.removeProperty('transform');
              }
              unsetSafeAreaInsets();
            };
          }
          /* istanbul ignore next: node.parentElement может быть null, но такой кейс в теории невозможен */
          return;
        }
        /* istanbul ignore next: не покрывается за счёт теста на <AppRoot mode="partial" /> */
        case 'partial': {
          return;
        }
      }
      /* eslint-enable no-restricted-properties */
    },
    [
      mode,
      layout,
      disableParentTransformForPositionFixedElements,
      tokensClassName,
      sizeX,
      sizeY,
      safeAreaInsets,
    ],
  );

  const ScrollController = React.useMemo(
    () => (scroll === 'contain' ? ElementScrollController : GlobalScrollController),
    [scroll],
  );

  const content = (
    <AppRootContext.Provider
      value={{
        appRoot: appRootRef,
        portalRoot: portalRootRef,
        embedded: mode === 'embedded',
        mode,
        disablePortal,
        layout,
        get keyboardInput() {
          return isKeyboardInputActiveRef.current;
        },
      }}
    >
      <ScrollController elRef={appRootRef}>{children}</ScrollController>
    </AppRootContext.Provider>
  );

  return mode === 'partial' ? (
    content
  ) : (
    <div
      ref={appRootRef}
      className={classNames(
        styles['AppRoot'],
        hasPointer === undefined
          ? styles['AppRoot--pointer-none']
          : !hasPointer && styles['AppRoot--pointer-has-not'],
        className,
      )}
      {...props}
    >
      {content}
    </div>
  );
};
