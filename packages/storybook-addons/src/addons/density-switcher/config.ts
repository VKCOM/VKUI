import { DEFAULT_PARAM_KEY } from './constants';

export interface DensitySwitcherConfig {
  parameterName: string;
}

const GLOBAL_KEY = '__VKUI_DENSITY_SWITCHER_CONFIG__';

const getDefaultConfig = (): DensitySwitcherConfig => ({
  parameterName: DEFAULT_PARAM_KEY,
});

const config: DensitySwitcherConfig = ((window as any)[GLOBAL_KEY] ??= getDefaultConfig());

export const getDensitySwitcherConfig = () => config;

export const setDensitySwitcherConfig = (newConfig: Partial<DensitySwitcherConfig>) => {
  if (newConfig.parameterName) {
    config.parameterName = newConfig.parameterName;
  }
};
