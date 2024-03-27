import { Configuration } from 'webpack';
import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import WebpackCommonConfig from '../../../webpack.common.config';

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
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    './addons/source-tab',
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@project-tools/storybook-addon-cartesian'),
    './addons/appearance',
    './addons/pointer',
    './addons/customPanelHeaderAfter',
    './addons/storybook-theme',
    getAbsolutePath('storybook-addon-swc'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
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

  docs: {
    autodocs: true,
  },
};

module.exports = config;

function getAbsolutePath(value: string): any {
  return path.dirname(require.resolve(path.join(value, 'package.json')));
}
