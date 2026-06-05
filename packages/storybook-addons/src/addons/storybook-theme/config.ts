import { create } from 'storybook/theming';
import type { ThemeVars } from 'storybook/theming';
import { DEFAULT_PARAM_KEY } from './constants.ts';

export interface StorybookThemeConfig {
  lightTheme: ThemeVars;
  darkTheme: ThemeVars;
  parameterName: string;
}

const config: StorybookThemeConfig = {
  lightTheme: create({ base: 'light' }),
  darkTheme: create({ base: 'dark' }),
  parameterName: DEFAULT_PARAM_KEY,
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
};
