import * as React from 'react';
import { useGlobals, addons, useStorybookApi } from 'storybook/manager-api';
import { styled } from 'storybook/theming';
import { SET_GLOBALS } from 'storybook/internal/core-events';
import { IconButton } from 'storybook/internal/components';
import { SunIcon, MoonIcon } from '@storybook/icons';
import { PARAM_KEY, SET_STORYBOOK_THEME } from './constants';
import { vkuiDarkTheme, vkuiLightTheme } from './vkuiThemes';

const SidebarIconButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  overflow: 'visible',
  color: theme.textMutedColor,
  marginTop: 0,
  zIndex: 1,
}));

const STORAGE_KEY = 'sb-dark-theme';

const channel = addons.getChannel();

export const getLocalStorageValue = () => {
  return window.localStorage.getItem(STORAGE_KEY);
};

export const updateLocalStorageValue = (theme: 'light' | 'dark') => {
  window.localStorage.setItem(STORAGE_KEY, theme);
};

export const StorybookTheme = () => {
  const [globals, updateGlobals] = useGlobals();
  const { once } = useStorybookApi();
  const currentTheme = globals[PARAM_KEY];
  const isCurrentThemeDark = currentTheme === 'dark';
  const nextTheme = isCurrentThemeDark ? 'light' : 'dark';

  const updateTheme = (themeProp: 'light' | 'dark') => {
    channel.emit(SET_STORYBOOK_THEME, themeProp);
    updateGlobals({ [PARAM_KEY]: themeProp, colorScheme: themeProp });
    updateLocalStorageValue(themeProp);
  };

  const toggleTheme = React.useCallback(() => {
    addons.setConfig({ theme: nextTheme === 'dark' ? vkuiDarkTheme : vkuiLightTheme });
    updateTheme(nextTheme);
  }, [nextTheme, updateGlobals]);

  React.useEffect(() => {
    const { theme } = addons.getConfig();
    const themeNotMatched = theme && theme.base !== currentTheme;

    once(SET_GLOBALS, () => {
      if (themeNotMatched) {
        updateTheme(theme.base);
      }
    });
  }, []);

  const title = isCurrentThemeDark ? 'Turn the light theme' : 'Turn the dark theme';

  return (
    <SidebarIconButton key="sb-dark-theme" onClick={toggleTheme} title={title}>
      {isCurrentThemeDark ? <SunIcon /> : <MoonIcon />}
    </SidebarIconButton>
  );
};
