import { Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import * as React from 'react';
import { ColorScheme, type ColorSchemeType, IconButton } from '@vkontakte/vkui';

export const ColorSchemeSwitcher: React.FC<{
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
