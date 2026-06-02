import * as React from 'react';
import { useGlobals, addons, useStorybookApi } from 'storybook/manager-api';
import { styled } from 'storybook/theming';
import { SET_GLOBALS } from 'storybook/internal/core-events';
import { Select } from 'storybook/internal/components';
import { SunIcon, MoonIcon } from '@storybook/icons';
import { PARAM_KEY, SET_STORYBOOK_THEME } from './constants';
import { vkuiDarkTheme, vkuiLightTheme } from './vkuiThemes';

const SidebarSelect = styled(Select)(({ theme }) => ({
  position: 'relative',
  overflow: 'visible',
  color: theme.textMutedColor,
  marginTop: 0,
  zIndex: 1,
}));

const STORAGE_KEY = 'sb-dark-theme';

const channel = addons.getChannel();

type Theme = 'light' | 'dark';

export const getLocalStorageValue = () => {
  return window.localStorage.getItem(STORAGE_KEY);
};

export const updateLocalStorageValue = (theme: Theme) => {
  window.localStorage.setItem(STORAGE_KEY, theme);
};

export const StorybookTheme = () => {
  const [globals, updateGlobals] = useGlobals();
  const { once } = useStorybookApi();
  const selectedGlobalTheme = globals[PARAM_KEY];

  const updateTheme = React.useCallback(
    (globalTheme: Theme, localTheme?: Theme) => {
      channel.emit(SET_STORYBOOK_THEME, globalTheme);
      updateGlobals(
        localTheme
          ? { [PARAM_KEY]: globalTheme, colorScheme: localTheme }
          : { [PARAM_KEY]: globalTheme },
      );
      updateLocalStorageValue(globalTheme);
    },
    [updateGlobals],
  );

  const handleChange: React.ComponentProps<typeof Select>['onChange'] = React.useCallback(
    (selectedOptionRaw) => {
      const selectedOption = selectedOptionRaw[0] as Theme;
      addons.setConfig({ theme: selectedOption === 'dark' ? vkuiDarkTheme : vkuiLightTheme });
      updateTheme(selectedOption, selectedOption);
    },
    [updateTheme],
  );

  React.useEffect(() => {
    const { theme } = addons.getConfig();
    const themeNotMatched = theme && theme.base !== selectedGlobalTheme;

    once(SET_GLOBALS, () => {
      if (themeNotMatched) {
        updateTheme(theme.base);
      }
    });
  }, [once, updateTheme]);

  if (selectedGlobalTheme === undefined) {
    return null;
  }

  return (
    <SidebarSelect
      key="sb-dark-theme"
      size="small"
      ariaLabel="Choose global theme"
      icon={selectedGlobalTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      defaultOptions={selectedGlobalTheme}
      options={[
        {
          icon: <SunIcon />,
          title: 'light (global)',
          value: 'light',
        },
        {
          icon: <MoonIcon />,
          title: 'dark (global)',
          value: 'dark',
        },
      ]}
      onChange={handleChange}
    >
      {`${selectedGlobalTheme} (global)`}
    </SidebarSelect>
  );
};
