import * as React from 'react';
import { Footer, Head, Layout, LogoIcon, Navbar } from '@vkontakte/vkui-docs-theme';
import type { Metadata } from 'next';
import { getPageMap } from 'nextra/page-map';
import { FooterLinks, Versions } from './_components';
import '@vkontakte/vkui-docs-theme/styles.css';

export const metadata: Metadata = {
  title: {
    default: 'VKUI – React UI Kit',
    template: '%s | VKUI',
  },
};

const versions = <Versions />;

const navbar = <Navbar logo={<LogoIcon />} />;

const footer = (
  <Footer>
    <FooterLinks />
  </Footer>
);

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap();
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout pageMap={pageMap} navbar={navbar} versions={versions} footer={footer}>
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
