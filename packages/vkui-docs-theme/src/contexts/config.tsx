'use client';

import * as React from 'react';
import type { PageMapItem } from 'nextra';
import { useFSRoute } from 'nextra/hooks';
import { normalizePages } from 'nextra/normalize-pages';

type Config = {
  normalizePagesResult: ReturnType<typeof normalizePages>;
  isBlog?: boolean;
};

// @ts-expect-error: TS2740 No default value
const ConfigContext = React.createContext<Config>({});

export function useConfig() {
  return React.useContext(ConfigContext);
}

export const ConfigProvider = ({
  children,
  value: pageMap,
}: {
  children: React.ReactNode;
  value: PageMapItem[];
}): React.ReactElement => {
  const fsPath = useFSRoute();
  const isBlog = fsPath.includes('/blog');

  const normalizePagesResult = React.useMemo(
    () => normalizePages({ list: pageMap, route: fsPath }),
    [pageMap, fsPath],
  );

  const extendedConfig: Config = {
    isBlog,
    normalizePagesResult,
  };

  return <ConfigContext.Provider value={extendedConfig}>{children}</ConfigContext.Provider>;
};
