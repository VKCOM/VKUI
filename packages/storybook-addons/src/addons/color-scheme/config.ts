import { DEFAULT_PARAM_KEY } from './constants';

export interface ColorSchemeConfig {
  parameterName: string;
}

const GLOBAL_KEY = '__VKUI_COLOR_SCHEME_CONFIG__';

const getDefaultConfig = (): ColorSchemeConfig => ({
  parameterName: DEFAULT_PARAM_KEY,
});

const config: ColorSchemeConfig = ((window as any)[GLOBAL_KEY] ??= getDefaultConfig());

export const getColorSchemeConfig = () => config;

export const setColorSchemeConfig = (newConfig: Partial<ColorSchemeConfig>) => {
  if (newConfig.parameterName) {
    config.parameterName = newConfig.parameterName;
  }
};
