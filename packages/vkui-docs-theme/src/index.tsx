import * as React from 'react';
import type { NextraThemeLayoutProps } from 'nextra';
import { MDXProvider } from 'nextra/mdx';
import { Head } from './components';
import {
  ColorSchemeProvider,
  ConfigProvider,
  MenuProvider,
  ThemeConfigProvider,
  useConfig,
  useThemeConfig,
} from './contexts';
import { renderComponent } from './helpers/render';
import { getMdxComponents } from './mdx';
import { VKUIWrapper } from './wrappers';

export default function Layout({ children, themeConfig, pageOpts }: NextraThemeLayoutProps) {
  return (
    <ThemeConfigProvider value={themeConfig}>
      <ConfigProvider value={pageOpts}>
        <MenuProvider>
          <InnerLayout>{children}</InnerLayout>
        </MenuProvider>
      </ConfigProvider>
    </ThemeConfigProvider>
  );
}

function InnerLayout({ children }: { children: React.ReactNode }) {
  const config = useConfig();
  const themeConfig = useThemeConfig();

  const { activeThemeContext: themeContext, topLevelNavbarItems } = config.normalizePagesResult;

  return (
    <ColorSchemeProvider {...themeConfig.colorScheme}>
      <VKUIWrapper>
        <Head />
        {/* TODO [docs] (@BlackySoul): добавить компонент <Banner /> */}
        {themeContext.navbar &&
          renderComponent(themeConfig.navbar.component, {
            items: topLevelNavbarItems,
          })}
        <MDXProvider disableParentContext components={getMdxComponents(themeConfig.components)}>
          {children}
        </MDXProvider>
      </VKUIWrapper>
    </ColorSchemeProvider>
  );
}
