'use client';

import { LogoIcon, LogoIconUwu, Navbar } from '@vkontakte/vkui-docs-theme';

const additionalItems = [
  {
    title: 'Компоненты',
    href: '/overview/about',
    isActive: (activeRoute: string) =>
      ['/overview/', '/components/', '/integrations/', '/migrations/'].some((value) =>
        activeRoute.includes(value),
      ),
  },
  {
    title: 'Иконки',
    href: '/icons',
    isActive: (activeRoute: string) => activeRoute.includes('/icons'),
  },
];

export function DocsNavbar() {
  return (
    <Navbar
      logo={
        <>
          <LogoIcon />
          <LogoIconUwu />
        </>
      }
      additionalItems={additionalItems}
    />
  );
}
