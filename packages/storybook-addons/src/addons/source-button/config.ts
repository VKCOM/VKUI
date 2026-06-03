import type { ComponentType } from 'react';

export interface SourceButtonConfig {
  getUrl: (baseUrl: string, importPath: string) => string;
  baseUrl: string;
  icon?: ComponentType;
  label: string;
  title: string;
}

const config: SourceButtonConfig = {
  getUrl: () => '',
  baseUrl: '',
  label: '',
  title: '',
};

export const getSourceButtonConfig = () => config;

export const setSourceButtonConfig = (newConfig: SourceButtonConfig) => {
  config.getUrl = newConfig.getUrl;
  config.baseUrl = newConfig.baseUrl;
  config.icon = newConfig.icon;
  config.label = newConfig.label;
  config.title = newConfig.title;
};
