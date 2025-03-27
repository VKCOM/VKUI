import * as React from 'react';
import {
  ColorScheme,
  type ColorSchemeType,
  Select,
  type SelectProps,
  useColorScheme,
} from '@vkontakte/vkui';

const OPTIONS: SelectProps['options'] = [
  {
    value: 'light',
    label: 'light',
  },
  {
    value: 'dark',
    label: 'dark',
  },
];

const STORAGE_KEY = 'vkui-next-js-template:color-scheme';

const getColorSchemeFromStorage = (defaultColorScheme: ColorSchemeType) => {
  if (typeof window === 'undefined') {
    return defaultColorScheme;
  }
  let colorScheme;
  try {
    colorScheme = (localStorage.getItem(STORAGE_KEY) as ColorSchemeType) || defaultColorScheme;
  } catch (e) {
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
  } catch (e) {
    // Unsupported
  }
};

const ColorSchemeSwitcher: React.FC<{
  colorScheme: ColorSchemeType;
  setColorScheme: (colorScheme: ColorSchemeType) => void;
}> = ({ colorScheme, setColorScheme }) => {
  return (
    <Select
      options={OPTIONS}
      value={colorScheme}
      onChange={(_, newColorScheme) => setColorScheme(newColorScheme as ColorSchemeType)}
    />
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
    () => _updateColorScheme(getColorSchemeFromStorage(defaultColorScheme)),
    [defaultColorScheme],
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
