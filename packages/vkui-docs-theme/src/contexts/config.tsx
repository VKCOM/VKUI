import * as React from 'react';
import type { PageOpts } from 'nextra';
import { useFSRoute } from 'nextra/hooks';
import { normalizePages } from 'nextra/normalize-pages';

type Config = Pick<PageOpts, 'title' | 'frontMatter' | 'filePath' | 'timestamp' | 'pageMap'> & {
  hideSidebar: boolean;
  normalizePagesResult: ReturnType<typeof normalizePages>;
  metaData?: Record<string, React.FC>;
  isBlog?: boolean;
};

const ConfigContext = React.createContext<Config>({
  title: '',
  frontMatter: {},
  filePath: '',
  hideSidebar: false,
  // @ts-expect-error: TS2740 No default value
  normalizePagesResult: {},
  isBlog: false,
});

export function useConfig() {
  return React.useContext(ConfigContext);
}

export const ConfigProvider = ({
  children,
  value: pageOpts,
}: {
  children: React.ReactNode;
  value: PageOpts;
}): React.ReactElement => {
  const fsPath = useFSRoute();
  const isBlog = fsPath.includes('/blog');

  const normalizePagesResult = React.useMemo(
    () => normalizePages({ list: pageOpts.pageMap, route: fsPath }),
    [pageOpts.pageMap, fsPath],
  );

  const { activeType, activePath, activeThemeContext: themeContext } = normalizePagesResult;

  // There are no more additional fields on item, so we extract meta by this mess
  let metaData: Record<string, React.FC> = {};
  if (pageOpts.frontMatter.type !== 'tag' || !themeContext.sidebar) {
    pageOpts.pageMap.forEach((page) => {
      if ('name' in page && page.name === activePath[0].name && 'children' in page) {
        const data = page.children.find((value) => 'data' in value)?.data || {};
        const metaKeys = Object.keys(data);
        for (let key of metaKeys) {
          // @ts-expect-error: TS2339 No icon type on item
          metaData[key] = data[key].icon;
        }
      }
    });
  }

  const extendedConfig: Config = {
    title: pageOpts.title,
    pageMap: pageOpts.pageMap,
    frontMatter: pageOpts.frontMatter,
    filePath: pageOpts.filePath,
    hideSidebar: !themeContext.sidebar || themeContext.layout === 'raw' || activeType === 'page',
    isBlog,
    normalizePagesResult,
    metaData,
  };

  return <ConfigContext.Provider value={extendedConfig}>{children}</ConfigContext.Provider>;
};
