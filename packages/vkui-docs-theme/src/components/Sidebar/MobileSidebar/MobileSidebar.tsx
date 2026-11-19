'use client';

import * as React from 'react';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import {
  AdaptivityProvider,
  Button,
  FocusTrap,
  SizeType,
  useAdaptivityWithJSMediaQueries,
  unstable_useCSSKeyframesAnimationController as useCSSKeyframesAnimationController,
  useScrollLock,
  ViewWidth,
} from '@vkontakte/vkui';
import { useFSRoute, useHash } from 'nextra/hooks';
import { useConfig, useMenu, useThemeConfig } from '../../../contexts';
import { Menu } from '../Menu/Menu';
import styles from './MobileSidebar.module.css';

export function MobileSidebar() {
  const {
    normalizePagesResult: { docsDirectories },
  } = useConfig();
  const themeConfig = useThemeConfig();
  const { menu, setMenu } = useMenu();
  const pathname = useFSRoute();
  const hash = useHash();
  const { viewWidth } = useAdaptivityWithJSMediaQueries();
  const rootRef = React.useRef<HTMLElement>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);

  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    menu ? 'enter' : 'exit',
    undefined,
    true,
  );

  const visible = animationState !== 'exited';

  React.useEffect(() => {
    setMenu(false);
  }, [pathname, hash, setMenu]);

  useScrollLock(menu);

  React.useLayoutEffect(() => {
    if (!visible || !rootRef.current) {
      return;
    }

    const hiddenElements: Array<{ element: Element; inert: boolean; ariaHidden: string | null }> =
      [];
    let current: Element = rootRef.current;
    // Keep body portals available for nested VKUI modals (for example, Versions).
    while (current.parentElement && current.parentElement !== document.body) {
      for (const element of current.parentElement.children) {
        if (
          element === current ||
          element === backdropRef.current ||
          element.hasAttribute('data-focus-guard')
        ) {
          continue;
        }
        hiddenElements.push({
          element,
          inert: element.hasAttribute('inert'),
          ariaHidden: element.getAttribute('aria-hidden'),
        });
        element.setAttribute('inert', '');
        // Safari 15 does not support inert; FocusTrap handles keyboard navigation.
        element.setAttribute('aria-hidden', 'true');
      }
      current = current.parentElement;
    }

    return () => {
      for (const { element, inert, ariaHidden } of hiddenElements) {
        if (!inert) {
          element.removeAttribute('inert');
        }
        if (ariaHidden === null) {
          element.removeAttribute('aria-hidden');
        } else {
          element.setAttribute('aria-hidden', ariaHidden);
        }
      }
    };
  }, [visible]);

  React.useEffect(() => {
    if (viewWidth === ViewWidth.DESKTOP) {
      setMenu(false);
    }
  }, [viewWidth]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <div
        ref={backdropRef}
        aria-hidden
        className={classNames(styles.backdrop, menu ? styles.backdropShow : styles.backdropHide)}
        onClick={() => setMenu(false)}
      />
      <FocusTrap rootRef={rootRef}>
        <aside
          ref={rootRef}
          id="vkui-docs-mobile-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Меню документации"
          tabIndex={-1}
          onKeyDown={(event) => {
            if (
              event.key === 'Escape' &&
              !event.defaultPrevented &&
              event.currentTarget.contains(event.target as Node)
            ) {
              event.preventDefault();
              event.stopPropagation();
              setMenu(false);
            }
          }}
          className={classNames(styles.root, menu ? styles.rootShow : styles.rootHide)}
          {...animationHandlers}
        >
          <AdaptivityProvider density={SizeType.COMPACT}>
            <div className={classNames(styles.extra)}>
              {themeConfig.versions}
              <Button
                mode="secondary"
                appearance="neutral"
                size="l"
                aria-label="Закрыть меню"
                onClick={() => setMenu(false)}
                before={<Icon24CancelOutline />}
              />
            </div>
          </AdaptivityProvider>
          <nav className={styles.inner} aria-label="Содержание раздела">
            <Menu directories={docsDirectories} mobileView />
          </nav>
        </aside>
      </FocusTrap>
    </>
  );
}
