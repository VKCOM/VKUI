'use client';

import * as React from 'react';
import { Icon16LinkOutline, Icon24MenuOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import {
  AdaptivityProvider,
  Button,
  ButtonGroup,
  type ButtonProps,
  Flex,
  Tappable,
} from '@vkontakte/vkui';
import NextLink from 'next/link';
import { useFSRoute } from 'nextra/hooks';
import type { MenuItem, PageItem } from 'nextra/normalize-pages';
import { useConfig, useMenu, useThemeConfig } from '../../contexts';
import { ColorSchemeSwitch } from '../ColorSchemeSwitch';
import { ProjectButton } from '../ProjectButton';
import styles from './Navbar.module.css';

export interface NavbarProps {
  /**
   * Лого документации
   */
  logo: React.ReactElement;
}

const isMenu = (page: PageItem | MenuItem): page is MenuItem => page.type === 'menu';

export function Navbar({ logo }: NavbarProps): React.ReactElement {
  const themeConfig = useThemeConfig();
  const activeRoute = useFSRoute();
  const { setMenu } = useMenu();
  const {
    normalizePagesResult: { topLevelNavbarItems: items },
  } = useConfig();

  return (
    <AdaptivityProvider sizeY="compact">
      <div className={styles.root}>
        <nav className={styles.navbar}>
          <Flex align="center">
            <Button
              size="l"
              before={<Icon24MenuOutline />}
              mode="tertiary"
              appearance="neutral"
              className={styles.menuButton}
              label="Меню"
              onClick={() => setMenu(true)}
            />
            <Tappable
              Component={NextLink}
              className={styles.logo}
              hoverMode="opacity"
              activeMode="opacity"
              href="/"
            >
              {logo}
            </Tappable>
            <div className={styles.versions}>{themeConfig.versions}</div>
          </Flex>
          <ButtonGroup gap="space" className={classNames(styles.links)}>
            {items.map((page) => {
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

              return <NavBarLink key={href} title={page.title} href={href} activated={isActive} />;
            })}
          </ButtonGroup>
          <Flex align="center" gap="m">
            {themeConfig.search}
            <div className={styles.extraContent}>
              <ButtonGroup gap="s">
                {themeConfig.extraButtons}
                {themeConfig.projectLink && <ProjectButton projectLink={themeConfig.projectLink} />}
              </ButtonGroup>
            </div>
            <ColorSchemeSwitch />
          </Flex>
        </nav>
      </div>
    </AdaptivityProvider>
  );
}

interface NavBarLinkProps extends Omit<ButtonProps, 'title'> {
  title: PageItem['title'];
  href: string;
}

function NavBarLink({ title, href, ...restProps }: NavBarLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const ownProps = isExternal
    ? {
        target: '_blank',
        rel: 'noreferrer',
        after: <Icon16LinkOutline width={14} height={14} />,
      }
    : { Component: NextLink };

  return (
    <Button size="l" mode="tertiary" appearance="neutral" href={href} {...ownProps} {...restProps}>
      {title}
    </Button>
  );
}
