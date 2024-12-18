import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import type { ColorSchemeType } from '@vkontakte/vkui';
import { getColorScheme, getSystemColorScheme, updateDOM } from './helpers';
import { ColorSchemeScript } from './script';
import type {
  ColorSchemeExtendedType,
  ColorSchemeProviderProps,
  UseColorSchemeProps,
} from './types';

export type { ColorSchemeProviderProps, UseColorSchemeProps };

const ColorSchemeContext = React.createContext<UseColorSchemeProps>({
  setColorScheme: noop,
});

export const useColorScheme = () => React.useContext(ColorSchemeContext);

export const ColorSchemeProvider = ({
  defaultColorScheme = 'system',
  storageKey = 'vkui-theme',
  children,
}: ColorSchemeProviderProps) => {
  const [colorScheme, setColorScheme] = React.useState(
    () => getColorScheme(storageKey, defaultColorScheme) as ColorSchemeExtendedType,
  );
  const [systemColorScheme, setSystemColorScheme] = React.useState(
    () => getColorScheme(storageKey) as ColorSchemeType | undefined,
  );

  const handleColorScheme = React.useCallback(
    (value: React.SetStateAction<ColorSchemeExtendedType>) => {
      const newColorScheme = typeof value === 'function' ? value(colorScheme) : value;
      setColorScheme(newColorScheme);

      try {
        localStorage.setItem(storageKey, newColorScheme);
      } catch (e) {
        // Unsupported
      }
    },
    [colorScheme],
  );

  React.useEffect(() => {
    const mediaQuery = window ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;

    if (!mediaQuery) {
      return noop;
    }

    const handleMediaQuery = (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemColorScheme(e);
      setSystemColorScheme(resolved);

      if (colorScheme === 'system') {
        updateDOM('system');
      }
    };

    mediaQuery.addEventListener?.('change', handleMediaQuery);
    handleMediaQuery(mediaQuery);

    return () => mediaQuery.removeEventListener?.('change', handleMediaQuery);
  }, [colorScheme]);

  React.useEffect(() => {
    if (!window) {
      return noop;
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      if (!e.newValue) {
        handleColorScheme(defaultColorScheme);
      } else {
        setColorScheme(e.newValue as ColorSchemeExtendedType);
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, [handleColorScheme, defaultColorScheme]);

  React.useEffect(() => {
    updateDOM(colorScheme);
  }, [colorScheme]);

  const providerValue = React.useMemo(
    () => ({
      colorScheme,
      setColorScheme: handleColorScheme,
      resolvedColorScheme: colorScheme === 'system' ? systemColorScheme : colorScheme,
    }),
    [colorScheme, handleColorScheme, systemColorScheme],
  );

  return (
    <ColorSchemeContext.Provider value={providerValue}>
      <ColorSchemeScript storageKey={storageKey} defaultColorScheme={defaultColorScheme} />
      {children}
    </ColorSchemeContext.Provider>
  );
};
