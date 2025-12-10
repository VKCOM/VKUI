import { Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import * as React from 'react';
import { ColorScheme, type ColorSchemeType, IconButton, useColorScheme } from '@vkontakte/vkui';

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
      {colorScheme === ColorScheme.LIGHT ? <Icon28SunOutline /> : <Icon28MoonOutline />}
    </IconButton>
  );
};

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
