import * as React from 'react';
import { type ColorSchemeType, Select, type SelectProps } from '@vkontakte/vkui';

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

export const useColorSchemeSwitcher = (
  defaultColorScheme: ColorSchemeType,
): [ColorSchemeType, React.ReactElement] => {
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
