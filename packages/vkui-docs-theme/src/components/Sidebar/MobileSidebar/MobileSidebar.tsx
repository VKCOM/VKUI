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
import { useRouter } from 'next/router';
import type { Item } from 'nextra/normalize-pages';
import { useMenu, useThemeConfig } from '../../../contexts';
import { renderComponent } from '../../../helpers/render';
import { ProjectButton } from '../../ProjectButton';
import { Menu } from '../Menu/Menu';
import styles from './MobileSidebar.module.css';

interface MobileSideBarProps {
  flatDirectories: Item[];
  fullDirectories: Item[];
}

export function MobileSidebar({ flatDirectories, fullDirectories }: MobileSideBarProps) {
  const themeConfig = useThemeConfig();
  const { menu, setMenu } = useMenu();
  const router = useRouter();
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    menu ? 'enter' : 'exit',
    undefined,
    true,
  );
  const visible = animationState !== 'exited';
  const { viewWidth } = useAdaptivityWithJSMediaQueries();

  React.useEffect(() => {
    setMenu(false);
  }, [router.asPath, setMenu]);

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
        <div className={classNames(styles.mobileHidden, styles.search)}>
          {renderComponent(themeConfig.search.component, {
            directories: flatDirectories,
          })}
        </div>
        <Spacing size={15} className={styles.mobileHidden} />
        <Separator className={styles.mobileHidden} />
        <nav className={styles.inner}>
          <Menu directories={fullDirectories} />
        </nav>
        <AdaptivityProvider sizeY={SizeType.REGULAR}>
          <div className={classNames(styles.extra)}>
            {renderComponent(themeConfig.navbar.versions, { sizeY: 'regular' })}
            <ButtonGroup gap="m">
              {renderComponent(themeConfig.navbar.extraButtons)}
              {themeConfig.project.link ? (
                <ProjectButton icon={themeConfig.project.icon} link={themeConfig.project.link} />
              ) : null}
            </ButtonGroup>
          </div>
        </AdaptivityProvider>
      </aside>
    </>
  );
}
