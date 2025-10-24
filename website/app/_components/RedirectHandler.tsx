'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function RedirectHandler() {
  const router = useRouter();

  useEffect(
    /**
     * Примеры:
     *
     * 1 кейс
     * https://vkui.io/#/SplitLayout → https://vkui.io/components/split-layout
     * https://vkui.io/#/SplitCol → https://vkui.io/components/split-layout/#split-col-api
     * https://vkui.io/7.5.0/#/SplitLayout → https://vkui.io/7.5.0/components/split-layout
     * https://vkui.io/7.5.0/#/SplitCol → https://vkui.io/7.5.0/components/split-layout/#split-col-api
     *
     * 2 кейс
     * https://vkui.io → https://vkui.io/overview/about
     * https://vkui.io/7.5.0 → https://vkui.io/7.5.0/overview/about
     * https://vkui.io/7.10.0 → https://vkui.io/7.10.0/overview/about
     */
    function tryToRedirect() {
      const redirectFns = [getRedirectUrlForLegacyRoutes, getRedirectUrlForIndexPage];
      const location = window.location;
      for (const getRedirectUrl of redirectFns) {
        const redirectUrl = getRedirectUrl(location);
        if (redirectUrl !== null) {
          router.replace(withVersion(location, redirectUrl));
          break;
        }
      }
    },
    [router],
  );

  return null;
}

/**
 * ✅ https://<url>.ru/<version>
 * ❌ https://<url>.ru/<version>/
 */
function withVersion(location: Location, url: string) {
  const [, version] = location.pathname.match(/^\/(\d+\.\d+\.\d+)$/) ?? [null, null];
  return version !== null ? `${version}/${url}` : url;
}

/**
 * ✅ https://<url>.ru
 * ✅ https://<url>.ru/
 * ✅ https://<url>.ru/<version>
 * ✅ https://<url>.ru/<version>/
 * ❌ https://<url>.ru/<page>
 * ❌ https://<url>.ru/<version>/<page>
 */
function getRedirectUrlForIndexPage(location: Location) {
  if (location.pathname === '/' || /^\/(\d+\.\d+\.\d+)\/?$/.test(location.pathname)) {
    return 'overview/about';
  }
  return null;
}

function getRedirectUrlForLegacyRoutes(location: Location) {
  const COMPONENTS_DOCS_PARENT_PAGE_MAP: Record<string, string> = {
    Header: 'Group',
    Footer: 'Group',
    SplitCol: 'SplitLayout',
    WriteBarIcon: 'WriteBar',
    List: 'Cell',
    Tabbar: 'Epic',
    TabbarItem: 'Epic',
    PanelSpinner: 'Panel',
    PanelHeaderButton: 'PanelHeader',
    PanelHeaderContent: 'PanelHeader',
    SubnavigationButton: 'SubnavigationBar',
    TabsItem: 'Tabs',
    ActionSheetItem: 'ActionSheet',
    HorizontalCellShowMore: 'HorizontalCell',
    OnboardingTooltipContainer: 'OnboardingTooltip',
    DisplayTitle: 'Typography',
    Title: 'Typography',
    Headline: 'Typography',
    Text: 'Typography',
    Paragraph: 'Typography',
    Subhead: 'Typography',
    Footnote: 'Typography',
    Caption: 'Typography',
  };

  const isCamelOrPascalCase = (str: string): boolean =>
    /^[A-Za-z][A-Za-z0-9]*$/.test(str) && /[A-Z]/.test(str.slice(1));

  const getComponentUrl = (componentName: string, foundParentPage?: string): string => {
    const toKebabCase = (componentName: string) =>
      componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const url = foundParentPage
      ? `${toKebabCase(foundParentPage)}#${toKebabCase(componentName)}`
      : toKebabCase(componentName);

    return `components/${url}`;
  };

  const hash = location.hash;
  const componentNameByHash = hash.slice(2);

  if (hash.startsWith('#/') && isCamelOrPascalCase(componentNameByHash)) {
    const foundParentPage = COMPONENTS_DOCS_PARENT_PAGE_MAP[componentNameByHash];
    const documentationUrl = getComponentUrl(componentNameByHash, foundParentPage);
    return documentationUrl;
  }

  return null;
}
