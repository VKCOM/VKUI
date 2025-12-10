'use client';

import * as React from 'react';
import { Icon24CancelOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import {
  AdaptivityProvider,
  Button,
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
        className={classNames(styles.backdrop, menu ? styles.backdropShow : styles.backdropHide)}
        onClick={() => setMenu(false)}
      />
      <aside
        className={classNames(styles.root, menu ? styles.rootShow : styles.rootHide)}
        {...animationHandlers}
      >
        <AdaptivityProvider sizeY={SizeType.COMPACT}>
          <div className={classNames(styles.extra)}>
            {themeConfig.versions}
            <Button
              mode="secondary"
              appearance="neutral"
              size="l"
              title="Закрыть"
              onClick={() => setMenu(false)}
              before={<Icon24CancelOutline />}
            />
          </div>
        </AdaptivityProvider>
        <nav className={styles.inner}>
          <Menu directories={docsDirectories} mobileView />
        </nav>
      </aside>
    </>
  );
}
