import * as React from 'react';
import { IconSettingsProvider } from '@vkontakte/icons';
import { Insets } from '@vkontakte/vk-bridge';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAppearance } from '../../hooks/useAppearance';
import { useInsets } from '../../hooks/useInsets';
import { useKeyboardInputTracker } from '../../hooks/useKeyboardInputTracker';
import { SizeType } from '../../lib/adaptivity';
import { useDOM } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { AppRootContext } from './AppRootContext';
import { ElementScrollController, GlobalScrollController } from './ScrollContext';
import styles from './AppRoot.module.css';

const vkuiSizeXClassNames = {
  none: 'vkui--sizeX-none',
  [SizeType.REGULAR]: 'vkui--sizeX-regular',
};

const INSET_CUSTOM_PROPERTY_PREFIX = `--vkui_internal--safe_area_inset_`;

// Используйте classList, но будьте осторожны
/* eslint-disable no-restricted-properties */

export interface AppRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Режим встраивания */
  mode?: 'partial' | 'embedded' | 'full';
  window?: Window;
  scroll?: 'global' | 'contain';
  /**
   * Кастомный root-элемент портала
   */
  portalRoot?: HTMLElement | React.RefObject<HTMLElement> | null;
  /** Disable portal for components */
  disablePortal?: boolean;
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
  className,
  ...props
}: AppRootProps) => {
  const isKeyboardInputActive = useKeyboardInputTracker();
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const [portalRoot, setPortalRoot] = React.useState<HTMLElement | null>(null);
  const { document } = useDOM();
  const insets = useInsets();
  const appearance = useAppearance();

  const { hasPointer, sizeX = 'none' } = useAdaptivity();

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
      portal?.parentElement?.removeChild(portal);
    };
  }, [portalRootProp]);

  // setup root classes
  useIsomorphicLayoutEffect(() => {
    if (mode === 'partial') {
      return noop;
    }

    const parent = rootRef.current?.parentElement;
    const classes = ['vkui__root'].concat(mode === 'embedded' ? 'vkui__root--embedded' : []);
    parent?.classList.add(...classes);

    return () => {
      parent?.classList.remove(...classes);
    };
  }, []);

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

    let key: keyof Insets;
    for (key in insets) {
      if (insets.hasOwnProperty(key) && typeof insets[key] === 'number') {
        const inset = insets[key];
        parent.style.setProperty(INSET_CUSTOM_PROPERTY_PREFIX + key, `${inset}px`);
        portalRoot &&
          portalRoot.style.setProperty(INSET_CUSTOM_PROPERTY_PREFIX + key, `${inset}px`);
      }
    }

    return () => {
      let key: keyof Insets;
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
    const className = sizeX !== SizeType.COMPACT ? vkuiSizeXClassNames[sizeX] : null;
    const container = mode === 'embedded' ? rootRef.current?.parentElement : document!.body;

    if (className === null || !container) {
      return noop;
    }

    container.classList.add(className);
    return () => {
      container.classList.remove(className);
    };
  }, [sizeX]);

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
      }}
    >
      <ScrollController elRef={rootRef}>
        <IconSettingsProvider classPrefix="vkui">{children}</IconSettingsProvider>
      </ScrollController>
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
