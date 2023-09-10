import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAppearance } from '../../hooks/useAppearance';
import { useInsets } from '../../hooks/useInsets';
import { useKeyboardInputTracker } from '../../hooks/useKeyboardInputTracker';
import { SizeType } from '../../lib/adaptivity';
import { useDOM } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import { AppRootContext } from './AppRootContext';
import { ElementScrollController, GlobalScrollController } from './ScrollContext';
import styles from './AppRoot.module.css';

const warn = warnOnce('AppRoot');

export type SafeAreaInsets = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

const vkuiSizeXClassNames = {
  none: 'vkui--sizeX-none',
  [SizeType.REGULAR]: 'vkui--sizeX-regular',
};

const vkuiLayoutClassNames = {
  card: 'vkui--layout-card',
  plain: 'vkui--layout-plain',
};

function containerClassNames(layout: AppRootProps['layout'], sizeX: SizeType | 'none'): string[] {
  const classNames: string[] = [];

  if (layout) {
    classNames.push(vkuiLayoutClassNames[layout]);
  }

  if (sizeX !== SizeType.COMPACT) {
    classNames.push(vkuiSizeXClassNames[sizeX]);
  }

  return classNames;
}

const INSET_CUSTOM_PROPERTY_PREFIX = `--vkui_internal--safe_area_inset_`;

// Используйте classList, но будьте осторожны
/* eslint-disable no-restricted-properties */

export interface AppRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Режим встраивания */
  mode?: 'partial' | 'embedded' | 'full';
  window?: Window;
  scroll?: 'global' | 'contain';
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
  layout?: 'card' | 'plain';
}

/**
 * @see https://vkcom.github.io/VKUI/#/AppRoot
 */
export const AppRoot = ({
  children,
  mode = 'full',
  scroll = 'global',
  portalRoot: portalRootProp = null,
  disablePortal,
  disableParentTransformForPositionFixedElements,
  className,
  safeAreaInsets,
  layout,
  ...props
}: AppRootProps) => {
  const isKeyboardInputActive = useKeyboardInputTracker();
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const [portalRoot, setPortalRoot] = React.useState<HTMLElement | null>(null);
  const { document } = useDOM();
  const deprecatedInsets = useInsets(!safeAreaInsets);
  const insets = safeAreaInsets ? safeAreaInsets : deprecatedInsets;
  const appearance = useAppearance();

  const { hasPointer, sizeX = 'none' } = useAdaptivity();

  if (process.env.NODE_ENV === 'development') {
    if (!safeAreaInsets) {
      // TODO [>=6]: удалить warn
      warn("[@vkontakte/vk-bridge] Интеграция VKUI с @vkontakte/vk-bridge устарела и будет удалена в v6. Используйте хук `useInsets()` из @vkontakte/vk-bridge-react и результат передайте в параметр `safeAreaInsets` (см. https://github.com/VKCOM/VKUI/issues/5049)"); // prettier-ignore
    }
  }

  // setup portal
  useIsomorphicLayoutEffect(() => {
    let portal: HTMLElement | null = null;
    if (portalRootProp) {
      if (isRefObject(portalRootProp)) {
        portal = portalRootProp.current;
      } else {
        portal = portalRootProp;
      }
    }
    if (!portal) {
      portal = document!.createElement('div');
      document!.body.appendChild(portal);
    }
    setPortalRoot(portal);
    return () => {
      if (!portalRootProp) {
        portal?.parentElement?.removeChild(portal);
      }
    };
  }, [portalRootProp]);

  // setup root classes
  useIsomorphicLayoutEffect(() => {
    if (mode === 'partial') {
      return noop;
    }

    const parent = rootRef.current?.parentElement;
    const classes = ['vkui__root'].concat(mode === 'embedded' ? 'vkui__root--embedded' : []);
    if (parent) {
      if (mode === 'embedded' && !disableParentTransformForPositionFixedElements) {
        parent.style.transform = 'translate3d(0, 0, 0)';
      }
      parent.classList.add(...classes);
    }

    return () => {
      if (parent) {
        if (mode === 'embedded' && !disableParentTransformForPositionFixedElements) {
          parent.style.transform = '';
        }
        parent.classList.remove(...classes);
      }
    };
  }, [disableParentTransformForPositionFixedElements]);

  useIsomorphicLayoutEffect(() => {
    if (mode === 'full') {
      document!.documentElement.classList.add('vkui');

      return () => {
        document!.documentElement.classList.remove('vkui');
      };
    }

    return undefined;
  }, [document, mode]);

  // setup insets
  useIsomorphicLayoutEffect(() => {
    if (mode === 'partial' || !rootRef.current?.parentElement) {
      return noop;
    }

    const parent = rootRef.current.parentElement;

    let key: keyof SafeAreaInsets;
    for (key in insets) {
      if (insets.hasOwnProperty(key) && typeof insets[key] === 'number') {
        const inset = insets[key];
        parent.style.setProperty(INSET_CUSTOM_PROPERTY_PREFIX + key, `${inset}px`);
        portalRoot &&
          portalRoot.style.setProperty(INSET_CUSTOM_PROPERTY_PREFIX + key, `${inset}px`);
      }
    }

    return () => {
      let key: keyof SafeAreaInsets;
      for (key in insets) {
        if (insets.hasOwnProperty(key)) {
          parent.style.removeProperty(INSET_CUSTOM_PROPERTY_PREFIX + key);
          portalRoot && portalRoot.style.removeProperty(INSET_CUSTOM_PROPERTY_PREFIX + key);
        }
      }
    };
  }, [insets, portalRoot]);

  // adaptivity handler
  useIsomorphicLayoutEffect(() => {
    if (mode === 'partial') {
      return noop;
    }

    const classNames = containerClassNames(layout, sizeX);

    const container = mode === 'embedded' ? rootRef.current?.parentElement : document!.body;

    if (!classNames.length || !container) {
      return noop;
    }

    container.classList.add(...classNames);
    return () => {
      container.classList.remove(...classNames);
    };
  }, [sizeX, layout]);

  useIsomorphicLayoutEffect(() => {
    if (mode !== 'full' || appearance === undefined) {
      return noop;
    }
    document!.documentElement.style.setProperty('color-scheme', appearance);

    return () => document!.documentElement.style.removeProperty('color-scheme');
  }, [appearance]);

  const ScrollController = React.useMemo(
    () => (scroll === 'contain' ? ElementScrollController : GlobalScrollController),
    [scroll],
  );

  const content = (
    <AppRootContext.Provider
      value={{
        appRoot: rootRef,
        portalRoot,
        embedded: mode === 'embedded',
        keyboardInput: isKeyboardInputActive,
        mode,
        disablePortal,
        layout,
      }}
    >
      <ScrollController elRef={rootRef}>{children}</ScrollController>
    </AppRootContext.Provider>
  );

  return mode === 'partial' ? (
    content
  ) : (
    <div
      ref={rootRef}
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
