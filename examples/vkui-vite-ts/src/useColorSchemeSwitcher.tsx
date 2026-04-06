import * as React from 'react';
import { ColorSchemeSwitcher } from './ColorSchemeSwitcher.tsx';
import { useColorScheme, type ColorSchemeType } from '@vkontakte/vkui';

export const useColorSchemeSwitcher = (): [ColorSchemeType, React.ReactNode] => {
  const defaultColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = React.useState(defaultColorScheme);

  React.useLayoutEffect(() => setColorScheme(defaultColorScheme), [defaultColorScheme]);

  return [
    colorScheme,
    <ColorSchemeSwitcher
      key="color-scheme-switcher"
      colorScheme={colorScheme}
      setColorScheme={setColorScheme}
    />,
  ];
};
