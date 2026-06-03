import { create } from 'storybook/theming';
import type { ThemeVars } from 'storybook/theming';

export interface StorybookThemeConfig {
  lightTheme?: ThemeVars;
  darkTheme?: ThemeVars;
}

const config: Required<StorybookThemeConfig> = {
  lightTheme: create({ base: 'light' }),
  darkTheme: create({ base: 'dark' }),
};

export const getThemeConfig = () => config;

export const setThemeConfig = (newConfig: StorybookThemeConfig) => {
  if (newConfig.lightTheme) {
    config.lightTheme = newConfig.lightTheme;
  }
  if (newConfig.darkTheme) {
    config.darkTheme = newConfig.darkTheme;
  }
};
