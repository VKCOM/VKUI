import * as React from 'react';
import { type ColorSchemeType, Select, type SelectProps, useColorScheme } from '@vkontakte/vkui';

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

export const useColorSchemeSwitcher = (): [ColorSchemeType, React.ReactElement] => {
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
