import * as React from 'react';
import { ColorScheme, type ColorSchemeType, IconButton, useColorScheme } from '@vkontakte/vkui';
import { Icon28SunOutline, Icon28MoonOutline } from '@vkontakte/icons';

const STORAGE_KEY = 'vkui-next-js-template:color-scheme';

const subscribers = new Set<() => void>();

const subscribe = (callback: () => void) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

const getSnapshot = (defaultColorScheme: ColorSchemeType) => {
  let colorScheme: ColorSchemeType | null = null;
  try {
    colorScheme = localStorage.getItem(STORAGE_KEY) as ColorSchemeType | null;
  } catch {
    // Unsupported
  }
  return colorScheme || defaultColorScheme;
};

const getServerSnapshot = (defaultColorScheme: ColorSchemeType) => defaultColorScheme;

const setColorSchemeToStorage = (colorScheme: ColorSchemeType) => {
  try {
    localStorage.setItem(STORAGE_KEY, colorScheme);
  } catch {
    // Unsupported
  }
  subscribers.forEach((cb) => cb());
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
  const colorScheme = React.useSyncExternalStore(
    subscribe,
    () => getSnapshot(defaultColorScheme),
    () => getServerSnapshot(defaultColorScheme),
  );

  const _updateColorScheme = React.useCallback((colorScheme: ColorSchemeType) => {
    setColorSchemeToStorage(colorScheme);
  }, []);

  return [
    colorScheme,
    <ColorSchemeSwitcher
      key="color-scheme-switcher"
      colorScheme={colorScheme}
      setColorScheme={_updateColorScheme}
    />,
  ];
};
