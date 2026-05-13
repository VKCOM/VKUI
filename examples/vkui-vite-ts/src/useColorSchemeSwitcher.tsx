import * as React from 'react';
import { ColorSchemeSwitcher } from './ColorSchemeSwitcher.tsx';
import { useColorScheme, type ColorSchemeType } from '@vkontakte/vkui';

export const useColorSchemeSwitcher = (): [ColorSchemeType, React.ReactNode] => {
  const defaultColorScheme = useColorScheme();
  const [override, setOverride] = React.useState<ColorSchemeType | null>(null);

  const colorScheme = override ?? defaultColorScheme;

  const setColorScheme = React.useCallback((value: ColorSchemeType) => {
    setOverride(value);
  }, []);

  return [
    colorScheme,
    <ColorSchemeSwitcher
      key="color-scheme-switcher"
      colorScheme={colorScheme}
      setColorScheme={setColorScheme}
    />,
  ];
};
