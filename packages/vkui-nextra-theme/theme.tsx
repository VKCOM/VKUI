import Head from 'next/head';
import type { NextraThemeLayoutProps } from 'nextra';
import { NavHeader } from './components/NavHeader/NavHeader';
import { OneColumn } from './components/OneColumn/OneColumn';
import { ContentProvider } from './mdx';

export interface DocsThemeConfig {
  header?: {
    after?: React.ReactNode;
    before?: React.ReactNode;
    selectedHref?: string;
  };
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <article>
      <OneColumn>{children}</OneColumn>
    </article>
  );
}

export default function Layout({ children, pageOpts, themeConfig }: NextraThemeLayoutProps) {
  const { title } = pageOpts;

  const config = themeConfig as DocsThemeConfig;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="https://vk.com/images/icons/favicons/fav_logo_2x.ico?6" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>

      <NavHeader
        {...config.header}
        menu={{
          pages: [
            {
              href: 'https://vkcom.github.io/VKUI/',
              children: 'Компоненты',
            },
            {
              href: 'https://vkcom.github.io/icons/',
              children: 'Иконки',
            },
            {
              href: 'https://vkcom.github.io/vkui-tokens/',
              children: 'Токены',
            },
          ],
          selectedHref: config.header?.selectedHref,
        }}
      />

      <Body>
        <ContentProvider>{children}</ContentProvider>
      </Body>
    </>
  );
}
