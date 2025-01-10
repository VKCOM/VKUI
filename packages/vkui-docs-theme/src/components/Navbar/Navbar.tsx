import * as React from 'react';
import { Icon24MenuOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import {
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
import type { PageItem } from 'nextra/normalize-pages';
import { useMenu, useThemeConfig } from '../../contexts';
import { renderComponent } from '../../helpers/render';
import { type DocsThemeConfig } from '../../types';
import { ColorSchemeSwitch } from '../ColorSchemeSwitch';
import { ProjectButton } from '../ProjectButton';
import styles from './Navbar.module.css';

export type NavbarProps = {
  items: PageItem[];
};

export function Navbar({ items }: NavbarProps): React.ReactElement {
  const themeConfig = useThemeConfig();
  const activeRoute = useFSRoute();
  const { setMenu } = useMenu();

  return (
    <div className={styles.root}>
      <nav className={styles.navbar}>
        <Flex align="center" gap="2xl">
          {themeConfig.logoLink ? (
            <Logo logo={themeConfig.logo} logoLink={themeConfig.logoLink} />
          ) : (
            renderComponent(themeConfig.logo)
          )}
          {renderComponent(themeConfig.search.component, {
            className: styles.search,
          })}
        </Flex>
        <div className={classNames(styles.links)}>
          {items.map((page, index) => {
            if (page.display === 'hidden') {
              return null;
            }

            let href = page.href || page.route || '#';

            if (page.children) {
              href = (page.withIndexPage ? page.route : page.firstChildRoute) || href;
            }

            const isActive =
              (page.route === activeRoute || activeRoute.startsWith(page.route + '/')) &&
              !page.newWindow;

            return (
              <React.Fragment key={href}>
                {index === items.length - 1 && <Separator />}
                <NavBarLink
                  title={page.title}
                  newWindow={page.newWindow}
                  href={href}
                  activated={isActive || undefined}
                />
                {index === 0 && <Separator />}
              </React.Fragment>
            );
          })}
        </div>
        <Flex align="center" gap="m">
          <div className={styles.extraContent}>
            <ButtonGroup gap="s">
              {renderComponent(themeConfig.navbar.extraButtons)}
              {themeConfig.project.link ? (
                <ProjectButton icon={themeConfig.project.icon} link={themeConfig.project.link} />
              ) : null}
            </ButtonGroup>
            {renderComponent(themeConfig.navbar.versions)}
          </div>
          <ColorSchemeSwitch />
          <IconButton className={styles.menuButton} onClick={() => setMenu(true)} label="Меню">
            <Icon24MenuOutline className={styles.menuIcon} />
          </IconButton>
        </Flex>
      </nav>
    </div>
  );
}

function NavBarLink({
  title,
  newWindow,
  ...restProps
}: TappableProps & { title: PageItem['title']; newWindow?: boolean }) {
  return (
    <Tappable
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

function Logo({ logo, logoLink }: Pick<DocsThemeConfig, 'logo' | 'logoLink'>) {
  return (
    <Tappable
      Component={NextLink}
      hoverMode="opacity"
      activeMode="opacity"
      href={typeof logoLink === 'string' ? logoLink : '/'}
      className={styles.logoLink}
    >
      {renderComponent(logo)}
    </Tappable>
  );
}

function Separator() {
  return <VKUISeparator size="m" direction="vertical" className={styles.separator} aria-hidden />;
}
