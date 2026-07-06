import { create } from 'storybook/theming';
import type { ThemeVars } from 'storybook/theming';
import { DEFAULT_PARAM_KEY } from './constants';

export interface StorybookThemeConfig {
  lightTheme: ThemeVars;
  darkTheme: ThemeVars;
  parameterName: string;
  defaultValue: 'light' | 'dark' | 'system';
}

const config: StorybookThemeConfig = {
  lightTheme: create({ base: 'light' }),
  darkTheme: create({ base: 'dark' }),
  parameterName: DEFAULT_PARAM_KEY,
  defaultValue: 'system' as const,
};

export const getThemeConfig = () => config;

export const setThemeConfig = (newConfig: Partial<StorybookThemeConfig>) => {
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
};
