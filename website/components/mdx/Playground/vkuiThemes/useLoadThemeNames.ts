import * as React from 'react';
import { type PlatformType } from '@vkontakte/vkui';
import { useFetch } from '@vkontakte/vkui-docs-theme';
import pkg from '../../../../../package.json';
import {
  DEFAULT_THEME_FOR_PLATFORM,
  DEFAULT_THEME_NAMES,
  IGNORE_TOKENS_WITH_PREFIX,
  INVERTED_THEME_NAME,
  VKUI_TOKENS_THEMES_META_URL,
} from './constants';
import { getThemeCSSUrl } from './helpers';
import type { ColorSchemeOptionProps, ThemeValues, TokensInfoProps } from './types';

const vkuiTokensVersion = pkg.devDependencies['@vkontakte/vkui-tokens'];

export const useLoadThemeNames = () => {
  const { data, error } = useFetch(`${VKUI_TOKENS_THEMES_META_URL}@${vkuiTokensVersion}`) as {
    data?: TokensInfoProps;
    error: Error;
  };

  return React.useMemo(() => {
    if (!data) {
      return { isLoading: true, themeNames: [], error };
    }

    const files = data.files;
    const themes = files.find((file) => file.name === 'themes');
    if (!themes) {
      const errorMessage =
        'В структуре пакета @vkontakte/vkui-tokens не получается найти папкy "themes"';

      // eslint-disable-next-line no-console
      console.warn(errorMessage);
      return {
        isLoading: true,
        themeNames: [],
        error: new Error(errorMessage),
      };
    }

    const themesFiles = themes.files;
    const themesNames = themesFiles.map((theme) => theme.name);

    const filteredData = themesNames.filter(
      (themeNameRaw) =>
        !IGNORE_TOKENS_WITH_PREFIX.some((i) => themeNameRaw.startsWith(i)) ||
        !DEFAULT_THEME_NAMES.includes(themeNameRaw as 'vkBase' | 'vkIOS' | 'vkCom'),
    );

    filteredData.unshift(...DEFAULT_THEME_NAMES);

    const parsedData = filteredData.reduce((data, themeNameRaw) => {
      const invertedThemeName = INVERTED_THEME_NAME.get(themeNameRaw);
      const themeName = invertedThemeName ? invertedThemeName : themeNameRaw;
      const currentAppearance = themeName.endsWith('Dark') ? 'dark' : 'light';

      const key = themeName.replace('Dark', '');
      const values: ThemeValues = data.get(key) || {
        colorSchemeOptions: [
          { value: 'light', title: 'light', url: '', disabled: true },
          { value: 'dark', title: 'dark', url: '', disabled: true },
        ],
        baseForPlatform: null,
      };

      values.colorSchemeOptions = values.colorSchemeOptions.map((appearanceData) => {
        if (appearanceData.value === currentAppearance && appearanceData.disabled) {
          return {
            ...appearanceData,
            url: getThemeCSSUrl(themeNameRaw),
            disabled: false,
          };
        }
        return appearanceData;
      }) as [ColorSchemeOptionProps, ColorSchemeOptionProps];

      for (const [platform, defaultThemeName] of Object.entries(DEFAULT_THEME_FOR_PLATFORM)) {
        if (defaultThemeName === themeNameRaw) {
          values.baseForPlatform = platform as PlatformType;
        }
      }

      data.set(key, values);

      return data;
    }, new Map<string, ThemeValues>());
    return { isLoading: false, themeNames: Array.from(parsedData), error };
  }, [data]);
};
