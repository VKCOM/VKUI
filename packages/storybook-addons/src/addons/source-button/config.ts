import type { ComponentType } from 'react';

export interface SourceButtonConfig {
  getUrl: (baseUrl: string, importPath: string) => string;
  baseUrl: string;
  icon?: ComponentType;
  label: string;
  title: string;
}

const GLOBAL_KEY = '__VKUI_SOURCE_BUTTON_CONFIG__';

const getDefaultConfig = (): SourceButtonConfig => ({
  getUrl: (baseUrl, importPath) => {
    const cleanPath = importPath.replace(/^\.\//, '');
    return `${baseUrl}/${cleanPath}`;
  },
  baseUrl: '',
  label: 'Open source',
  title: 'Source',
});

const config: SourceButtonConfig = ((window as any)[GLOBAL_KEY] ??= getDefaultConfig());

export const getSourceButtonConfig = () => config;

export const setSourceButtonConfig = (newConfig: Partial<SourceButtonConfig>) => {
  if (newConfig.getUrl) {
    config.getUrl = newConfig.getUrl;
  }
  if (newConfig.baseUrl) {
    config.baseUrl = newConfig.baseUrl;
  }
  if (newConfig.icon) {
    config.icon = newConfig.icon;
  }
  if (newConfig.label) {
    config.label = newConfig.label;
  }
  if (newConfig.title) {
    config.title = newConfig.title;
  }
};
