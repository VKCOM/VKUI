import WebpackCommonConfig from '../../../webpack.common.config';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration } from 'webpack';

const cssRegExpString = /\.css$/.toString();

function getCssRulesFromConfig(config: Configuration) {
  return config.module!.rules?.filter((rule) =>
    rule === '...' ? false : rule.test?.toString() === cssRegExpString,
  );
}

function excludeCssRulesFromConfig(config: Configuration) {
  return config.module!.rules?.filter((rule) =>
    rule === '...' ? false : rule.test?.toString() !== cssRegExpString,
  );
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@project-tools/storybook-addon-cartesian',
    './addons/appearance',
    './addons/pointer',
    './addons/customPanelHeaderAfter',
    './addons/storybook-theme',
    'storybook-addon-swc',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      builder: {
        useSWC: true,
        fsCache: true,
      },
    },
  },
  webpackFinal: async (config) => {
    const commonCssRules = getCssRulesFromConfig(WebpackCommonConfig) ?? [];
    const rulesWithoutCss = excludeCssRulesFromConfig(config) ?? [];

    config.module!.rules = [...rulesWithoutCss, ...commonCssRules];

    return config;
  },
};

module.exports = config;
