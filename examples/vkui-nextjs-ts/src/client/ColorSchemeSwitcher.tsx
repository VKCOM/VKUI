import * as React from 'react';
import { ColorScheme, type ColorSchemeType, IconButton, useColorScheme } from '@vkontakte/vkui';
import { Icon28SunOutline, Icon28MoonOutline } from '@vkontakte/icons';

const STORAGE_KEY = 'vkui-next-js-template:color-scheme';

const getColorSchemeFromStorage = (defaultColorScheme: ColorSchemeType) => {
  if (typeof window === 'undefined') {
    return defaultColorScheme;
  }
  let colorScheme;
  try {
    colorScheme = (localStorage.getItem(STORAGE_KEY) as ColorSchemeType) || defaultColorScheme;
  } catch {
    // Unsupported
  }
  return colorScheme || defaultColorScheme;
};

const setColorSchemeToStorage = (colorScheme: ColorSchemeType) => {
  if (typeof window === 'undefined') {
    return undefined;
  }
  try {
    localStorage.setItem(STORAGE_KEY, colorScheme);
  } catch {
    // Unsupported
  }
};

const ColorSchemeSwitcher: React.FC<{
  colorScheme: ColorSchemeType;
  setColorScheme: (colorScheme: ColorSchemeType) => void;
}> = ({ colorScheme, setColorScheme }) => {
  return (
    <IconButton
      label={`Цветовая схема: ${colorScheme}`}
      onClick={() =>
        setColorScheme(colorScheme === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT)
      }
    >
      {ColorScheme.LIGHT ? <Icon28SunOutline /> : <Icon28MoonOutline />}
    </IconButton>
  );
};

export const useColorSchemeSwitcher = (): [ColorSchemeType, React.ReactNode] => {
  const defaultColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = React.useState<ColorSchemeType>(ColorScheme.LIGHT);

  const _updateColorScheme = React.useCallback((colorScheme: ColorSchemeType) => {
    setColorScheme(colorScheme);
    setColorSchemeToStorage(colorScheme);
  }, []);

  React.useLayoutEffect(
    () => setColorScheme(getColorSchemeFromStorage(defaultColorScheme)),
    [_updateColorScheme, defaultColorScheme],
  );

  return [
    colorScheme,
    <ColorSchemeSwitcher
      key="color-scheme-switcher"
      colorScheme={colorScheme}
      setColorScheme={_updateColorScheme}
    />,
  ];
};
