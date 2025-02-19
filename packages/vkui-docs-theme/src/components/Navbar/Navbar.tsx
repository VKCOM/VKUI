'use client';

import * as React from 'react';
import { Icon24MenuOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import {
  AdaptivityProvider,
  ButtonGroup,
  Flex,
  Headline,
  IconButton,
  Tappable,
  type TappableProps,
  Separator as VKUISeparator,
} from '@vkontakte/vkui';
import NextLink from 'next/link';
import { useFSRoute } from 'nextra/hooks';
import type { MenuItem, PageItem } from 'nextra/normalize-pages';
import { useConfig, useMenu, useThemeConfig } from '../../contexts';
import { ColorSchemeSwitch } from '../ColorSchemeSwitch';
import { ProjectButton } from '../ProjectButton';
import styles from './Navbar.module.css';

export type NavbarProps = {
  /**
   * Лого документации
   */
  logo: React.ReactElement;
};

const isMenu = (page: PageItem | MenuItem): page is MenuItem => page.type === 'menu';

export function Navbar({ logo }: NavbarProps): React.ReactElement {
  const themeConfig = useThemeConfig();
  const activeRoute = useFSRoute();
  const { setMenu } = useMenu();
  const {
    normalizePagesResult: { topLevelNavbarItems: items },
  } = useConfig();

  return (
    <div className={styles.root}>
      <nav className={styles.navbar}>
        <Flex align="center" gap="2xl">
          <Tappable
            Component={NextLink}
            className={styles.logo}
            hoverMode="opacity"
            activeMode="opacity"
            href="/"
          >
            {logo}
          </Tappable>
          <div className={styles.search}>{themeConfig.search}</div>
        </Flex>
        <div className={classNames(styles.links)}>
          {items.map((page, index) => {
            if (('display' in page && page.display === 'hidden') || isMenu(page)) {
              return null;
            }

            let href = page.href || page.route || '#';

            if (page.children) {
              href = ('frontMatter' in page ? page.route : page.firstChildRoute) || href;
            }

            const isActive =
              href === activeRoute ||
              (activeRoute.startsWith(page.route + '/') &&
                items.every((item) => !('href' in item) || item.href !== activeRoute)) ||
              undefined;

            return (
              <React.Fragment key={href}>
                {index === items.length - 1 && <Separator />}
                <NavBarLink title={page.title} href={href} activated={isActive || undefined} />
                {index === 0 && <Separator />}
              </React.Fragment>
            );
          })}
        </div>
        <AdaptivityProvider sizeY="compact">
          <Flex align="center" gap="m">
            <div className={styles.extraContent}>
              <ButtonGroup gap="s">
                {themeConfig.extraButtons}
                {themeConfig.projectLink ? (
                  <ProjectButton projectLink={themeConfig.projectLink} />
                ) : null}
              </ButtonGroup>
              {themeConfig.versions}
            </div>
            <ColorSchemeSwitch />
            <IconButton className={styles.menuButton} onClick={() => setMenu(true)} label="Меню">
              <Icon24MenuOutline className={styles.menuIcon} />
            </IconButton>
          </Flex>
        </AdaptivityProvider>
      </nav>
    </div>
  );
}

function NavBarLink({
  title,
  href = '',
  ...restProps
}: TappableProps & { title: PageItem['title']; newWindow?: boolean }) {
  const newWindow = /^https?:\/\//.test(href);
  return (
    <Tappable
      href={href}
      Component={NextLink}
      className={styles.navbarLink}
      activeClassName={styles.navbarLinkActive}
      {...(newWindow ? { target: '_blank', rel: 'noreferrer' } : undefined)}
      {...restProps}
    >
      <Headline level="2">{title}</Headline>
    </Tappable>
  );
}

function Separator() {
  return <VKUISeparator size="m" direction="vertical" className={styles.separator} aria-hidden />;
}
