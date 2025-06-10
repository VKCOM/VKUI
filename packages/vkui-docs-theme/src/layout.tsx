import * as React from 'react';
import type { PageMapItem } from 'nextra';
import { ColorSchemeProvider, ConfigProvider, MenuProvider, ThemeConfigProvider } from './contexts';
import { type DocsThemeConfig } from './types';
import { ContentWrapper, VKUIWrapper } from './wrappers';

interface LayoutProps extends Partial<DocsThemeConfig> {
  children: React.ReactNode;
  pageMap: PageMapItem[];
}

export function Layout({
  children,
  pageMap,
  colorScheme,
  navbar,
  footer,
  ...themeProps
}: LayoutProps) {
  return (
    <ThemeConfigProvider value={themeProps}>
      <ConfigProvider value={pageMap}>
        <MenuProvider>
          <ColorSchemeProvider {...colorScheme}>
            <VKUIWrapper>
              {/* TODO [docs] (@BlackySoul): добавить компонент <Banner /> */}
              {navbar}
              <ContentWrapper>{children}</ContentWrapper>
              {footer}
            </VKUIWrapper>
          </ColorSchemeProvider>
        </MenuProvider>
      </ConfigProvider>
    </ThemeConfigProvider>
  );
}
