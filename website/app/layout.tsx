import * as React from 'react';
import {
  Footer,
  Head,
  Layout,
  LogoIcon,
  LogoIconUwu,
  Navbar,
  Search,
  type SearchProps,
} from '@vkontakte/vkui-docs-theme';
import type { Metadata } from 'next';
import { type PageMapItem } from 'nextra';
import { getPageMap } from 'nextra/page-map';
import { PlaygroundStoreProvider } from '@/providers/playgroundStoreProvider';
import uwuCode from '../uwu.js?raw';
import { FooterLinks, Versions } from './_components';
import '@vkontakte/vkui-docs-theme/styles.css';

export const metadata: Metadata = {
  title: {
    default: 'VKUI – React UI Kit',
    template: '%s | VKUI',
  },
};

const versions = <Versions />;

const fakeNavbarItem = {
  title: 'Компоненты',
  href: '/overview/about',
};

const navbar = (
  <Navbar
    logo={
      <>
        <LogoIcon />
        <LogoIconUwu />
      </>
    }
    fakeNavbarItem={fakeNavbarItem}
  />
);

const footer = (
  <Footer>
    <FooterLinks />
  </Footer>
);

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap();

  const predefinedSearchResults = getPredefinedSearchResults(pageMap);

  const search = <Search predefinedResults={predefinedSearchResults} />;

  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: uwuCode,
          }}
        />
        <Layout
          pageMap={pageMap}
          navbar={navbar}
          versions={versions}
          footer={footer}
          search={search}
        >
          <PlaygroundStoreProvider>{children}</PlaygroundStoreProvider>
        </Layout>
      </body>
    </html>
  );
};

function getPredefinedSearchResults(pageMap: PageMapItem[]) {
  return pageMap
    .filter((item) => 'children' in item && item.name === 'overview')
    .reduce<NonNullable<SearchProps['predefinedResults']>>((prev, curr) => {
      if ('children' in curr) {
        prev.push(
          ...curr.children.reduce<NonNullable<SearchProps['predefinedResults']>>((nn, item) => {
            if ('route' in item) {
              nn.push({
                excerpt: '',
                meta: {
                  title: 'title' in item ? (item.title as string) : '',
                },
                sub_results: [],
                url: item.route,
                raw_url: '',
                weighted_locations: [],
              });
            }
            return nn;
          }, []),
        );
      }
      return prev;
    }, []);
}

export default RootLayout;
