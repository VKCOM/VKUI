import type * as React from 'react';
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
import type { PageMapItem } from 'nextra';
import { getPageMap } from 'nextra/page-map';
import { PlaygroundStoreProvider } from '@/providers/playgroundStoreProvider';
import challengeCode from '../inline/challange.js?raw';
import uwuCode from '../inline/uwu.js?raw';
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_TITLE, SITE_URL } from '../lib/metadata';
import { AlternateMdxLink, FooterLinks, RedirectHandler, Versions } from './_components';
import '@vkontakte/vkui-docs-theme/styles.css';

const inlineCodeArray = [challengeCode, uwuCode];

function InlineCode() {
  return (
    <>
      {inlineCodeArray.map((code, index) => (
        <script
          key={index}
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        />
      ))}
    </>
  );
}

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: '%s | VKUI',
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'VKUI',
    images: [{ url: SITE_IMAGE, alt: 'Документация VKUI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE_IMAGE, alt: 'Документация VKUI' }],
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

const searchableNavbarItems = ['components'];

const searchFilters = [{ label: 'Искать только по Компонентам', value: 'component' }];

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap();

  const predefinedSearchResults = getPredefinedSearchResults(pageMap);

  const search = <Search filters={searchFilters} predefinedResults={predefinedSearchResults} />;

  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head>
        <AlternateMdxLink />
      </Head>
      <body>
        <InlineCode />
        <RedirectHandler />
        <Layout
          pageMap={pageMap}
          navbar={navbar}
          versions={versions}
          footer={footer}
          search={search}
          searchableNavbarItems={searchableNavbarItems}
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
