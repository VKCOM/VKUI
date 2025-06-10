import * as React from 'react';
import { loadCSS } from './helpers';
import { type ColorSchemeOptionProps } from './types';

export const useThemeLoader = () => {
  const [playgroundLoading, setPlaygroundLoading] = React.useState(false);

  const loadTheme = React.useCallback(
    async (themeName: string, colorSchemeOptions: ColorSchemeOptionProps[]) => {
      if (themeName === 'vkBase') {
        return;
      }

      setPlaygroundLoading(true);
      try {
        await Promise.allSettled(
          colorSchemeOptions.map(({ url, disabled }) =>
            disabled ? Promise.resolve() : loadCSS(url),
          ),
        );
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(`Не удалось загрузить токены для темы ${themeName}:`, error);
      } finally {
        setPlaygroundLoading(false);
      }
    },
    [],
  );

  return { playgroundLoading, loadTheme };
};
