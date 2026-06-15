import { DEFAULT_PARAM_KEY } from './constants';

export interface ColorSchemeConfig {
  parameterName: string;
}

const config: ColorSchemeConfig = {
  parameterName: DEFAULT_PARAM_KEY,
};

export const getColorSchemeConfig = () => config;

export const setColorSchemeConfig = (newConfig: Partial<ColorSchemeConfig>) => {
  if (newConfig.parameterName) {
    config.parameterName = newConfig.parameterName;
  }
};
