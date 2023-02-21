const WebpackCommonConfig = require('../../../webpack.common.config');

const cssRegExpString = /\.css$/.toString();

function getCssRulesFromConfig(config) {
  return config.module.rules?.filter((rule) =>
    rule === '...' ? false : rule.test?.toString() === cssRegExpString,
  );
}

function excludeCssRulesFromConfig(config) {
  return config.module.rules?.filter((rule) =>
    rule === '...' ? false : rule.test?.toString() !== cssRegExpString,
  );
}

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@project-tools/storybook-addon-cartesian',
    './addons/appearance',
    './addons/pointer',
    'storybook-addon-swc',
  ],
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
      },
    },
  },
  features: {
    postcss: true,
    storyStoreV7: true,
    buildStoriesJson: true,
  },
  webpackFinal: async (config) => {
    const commonCssRules = getCssRulesFromConfig(WebpackCommonConfig) ?? [];
    const rulesWithoutCss = excludeCssRulesFromConfig(config) ?? [];

    config.module.rules = [...rulesWithoutCss, ...commonCssRules];

    return config;
  },
};

module.exports = config;
