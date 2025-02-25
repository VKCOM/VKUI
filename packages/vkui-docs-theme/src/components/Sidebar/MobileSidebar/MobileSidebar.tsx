'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import {
  AdaptivityProvider,
  ButtonGroup,
  Separator,
  SizeType,
  Spacing,
  useAdaptivityWithJSMediaQueries,
  unstable_useCSSKeyframesAnimationController as useCSSKeyframesAnimationController,
  useScrollLock,
  ViewWidth,
} from '@vkontakte/vkui';
import { useFSRoute, useHash } from 'nextra/hooks';
import { useConfig, useMenu, useThemeConfig } from '../../../contexts';
import { ProjectButton } from '../../ProjectButton';
import { Menu } from '../Menu/Menu';
import styles from './MobileSidebar.module.css';

export function MobileSidebar() {
  const {
    normalizePagesResult: { directories },
  } = useConfig();
  const themeConfig = useThemeConfig();
  const { menu, setMenu } = useMenu();
  const pathname = useFSRoute();
  const hash = useHash();
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    menu ? 'enter' : 'exit',
    undefined,
    true,
  );
  const visible = animationState !== 'exited';
  const { viewWidth } = useAdaptivityWithJSMediaQueries();

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
        <div className={classNames(styles.mobileHidden, styles.search)}>{themeConfig.search}</div>
        <Spacing size={15} className={styles.mobileHidden} />
        <Separator className={styles.mobileHidden} />
        <nav className={styles.inner}>
          <Menu directories={directories} mobileView />
        </nav>
        <AdaptivityProvider sizeY={SizeType.REGULAR}>
          <div className={classNames(styles.extra)}>
            {themeConfig.versions}
            <ButtonGroup gap="m">
              {themeConfig.extraButtons}
              {themeConfig.projectLink ? (
                <ProjectButton projectLink={themeConfig.projectLink} />
              ) : null}
            </ButtonGroup>
          </div>
        </AdaptivityProvider>
      </aside>
    </>
  );
}
