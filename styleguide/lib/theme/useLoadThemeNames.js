import * as React from 'react';
import { useFetch } from '../../utils/useFetch';
import {
  DEFAULT_THEME_FOR_PLATFORM,
  DEFAULT_THEME_NAMES,
  IGNORE_TOKENS_WITH_PREFIX,
  INVERTED_THEME_NAME,
  VKUI_TOKENS_THEMES_META_URL,
  VKUI_TOKENS_VERSION_URL,
} from './constants';
import { onlyVariablesLocalImportRule, onlyVariablesLocalURL } from './functions';

export const useLoadThemeNames = () => {
  const { data: versionData, error: versionError } = useFetch(VKUI_TOKENS_VERSION_URL);

  const { data, error: metaDataError } = useFetch(
    versionData && versionData.version
      ? `${VKUI_TOKENS_THEMES_META_URL}@${versionData.version}`
      : null,
  );

  const error = metaDataError || versionError;

  return React.useMemo(() => {
    if (!data) {
      return { isLoading: true, themeNames: [], error };
    }

    const files = data.files;
    const themes = files.find((file) => file.name === 'themes');
    if (!themes) {
      const errorMessage =
        'В структуре пакета @vkontakte/vkui-tokens не получается найти папкy "themes"';

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
        !DEFAULT_THEME_NAMES.includes(themeNameRaw),
    );

    filteredData.unshift(...DEFAULT_THEME_NAMES);

    const parsedData = filteredData.reduce((data, themeNameRaw) => {
      const invertedThemeName = INVERTED_THEME_NAME.get(themeNameRaw);
      const themeName = invertedThemeName ? invertedThemeName : themeNameRaw;
      const currentAppearance = themeName.endsWith('Dark') ? 'dark' : 'light';

      const key = themeName.replace('Dark', '');
      const values = data.get(key) || {
        colorSchemeOptions: [
          { value: 'light', title: 'light', url: '', importRule: '', disabled: true },
          { value: 'dark', title: 'dark', url: '', importRule: '', disabled: true },
        ],
        baseForPlatform: null,
      };

      values.colorSchemeOptions = values.colorSchemeOptions.map((appearanceData) => {
        if (appearanceData.value === currentAppearance && appearanceData.disabled) {
          return {
            ...appearanceData,
            url: onlyVariablesLocalURL(themeNameRaw),
            importRule: onlyVariablesLocalImportRule(themeNameRaw),
            disabled: false,
          };
        }
        return appearanceData;
      });

      for (const [platform, defaultThemeName] of DEFAULT_THEME_FOR_PLATFORM.entries()) {
        if (defaultThemeName === themeNameRaw) {
          values.baseForPlatform = platform;
        }
      }

      data.set(key, values);

      return data;
    }, new Map());
    return { isLoading: false, themeNames: Array.from(parsedData), error };
  }, [data]);
};
