'use client';

import { LogoIcon, LogoIconUwu, Navbar } from '@vkontakte/vkui-docs-theme';

const additionalItems = [
  {
    title: 'Компоненты',
    href: '/overview/components-showcase',
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
      logoHref="/overview/get-started"
      additionalItems={additionalItems}
    />
  );
}
