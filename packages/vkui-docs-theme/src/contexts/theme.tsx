'use client';

import * as React from 'react';
import { DEFAULT_THEME } from '../constants';
import type { DocsThemeConfig } from '../types';

const ThemeConfigContext = React.createContext<DocsThemeConfig>(DEFAULT_THEME);

export const useThemeConfig = () => React.useContext(ThemeConfigContext);

export function ThemeConfigProvider({
  value,
  children,
}: {
  value?: Partial<DocsThemeConfig>;
  children: React.ReactNode;
}) {
  const storeRef = React.useRef<DocsThemeConfig>(undefined);
  storeRef.current ||= {
    ...DEFAULT_THEME,
    ...(value &&
      Object.fromEntries(
        Object.entries(value).map(([key, value]) => [
          key,
          // @ts-expect-error: TS7053 value always there
          value && typeof value === 'object' ? { ...DEFAULT_THEME[key], ...value } : value,
        ]),
      )),
  };

  return (
    <ThemeConfigContext.Provider value={storeRef.current}>{children}</ThemeConfigContext.Provider>
  );
}
