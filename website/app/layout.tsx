import * as React from 'react';
import { Head, Layout, LogoIcon, Navbar } from '@vkontakte/vkui-docs-theme';
import type { Metadata } from 'next';
import { getPageMap } from 'nextra/page-map';
import { ExtraButtons, Versions } from './_components';
import '@vkontakte/vkui-docs-theme/styles.css';

export const metadata: Metadata = {
  title: {
    default: 'VKUI – React UI Kit',
    template: '%s | VKUI',
  },
};

const extraButtons = <ExtraButtons />;

const versions = <Versions />;

const navbar = <Navbar logo={<LogoIcon />} />;

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout pageMap={pageMap} navbar={navbar} extraButtons={extraButtons} versions={versions}>
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
