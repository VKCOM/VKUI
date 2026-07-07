import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import type { ThemeVars } from 'storybook/theming';
import { DEFAULT_PARAM_KEY } from './constants';
import { getLocalStorageValue } from './storage';

export interface StorybookThemeConfig {
  lightTheme: ThemeVars;
  darkTheme: ThemeVars;
  parameterName: string;
  defaultValue: 'light' | 'dark' | 'system';
}

const GLOBAL_KEY = '__VKUI_STORYBOOK_THEME_CONFIG__';

const getDefaultConfig = (): StorybookThemeConfig => ({
  lightTheme: create({ base: 'light' }),
  darkTheme: create({ base: 'dark' }),
  parameterName: DEFAULT_PARAM_KEY,
  defaultValue: 'system' as const,
});

const config: StorybookThemeConfig = ((window as any)[GLOBAL_KEY] ??= getDefaultConfig());

export const getThemeConfig = () => config;

export const setStorybookThemeConfig = (newConfig: Partial<StorybookThemeConfig>) => {
  if (newConfig.lightTheme) {
    config.lightTheme = newConfig.lightTheme;
  }
  if (newConfig.darkTheme) {
    config.darkTheme = newConfig.darkTheme;
  }
  if (newConfig.parameterName) {
    config.parameterName = newConfig.parameterName;
  }
  if (newConfig.defaultValue) {
    config.defaultValue = newConfig.defaultValue;
  }

  const systemTheme =
    config.defaultValue === 'system' &&
    ((window.matchMedia?.('(prefers-color-scheme: dark)').matches && 'dark') || 'light');

  const specificTheme = config.defaultValue === 'dark' ? 'dark' : 'light';

  const initialTheme = getLocalStorageValue() || systemTheme || specificTheme || 'light';

  addons.setConfig({ theme: initialTheme === 'dark' ? config.darkTheme : config.lightTheme });
};
