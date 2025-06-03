import path from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import postcssGlobalData from '@csstools/postcss-global-data';
import restructureVariable from '@project-tools/postcss-restructure-variable';
import autoprefixer from 'autoprefixer';
import postcssCustomMedia from 'postcss-custom-media';
import postcssGapProperties from 'postcss-gap-properties';
import cssImport from 'postcss-import';
import { getStyleGuideComponents } from './helpers/index.mjs';

const require = createRequire(import.meta.url);
const getAbsolutePath = (value) => path.dirname(require.resolve(path.join(value, 'package.json')));
const rootDirectory = path.join(fileURLToPath(import.meta.url), '../../../..');

const config = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    './addons/source-tab',
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-designs'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@project-tools/storybook-addon-cartesian'),
    './addons/colorScheme',
    './addons/pointer',
    './addons/customPanelHeaderAfter',
    './addons/source-button',
    './addons/documentation-button',
    './addons/storybook-theme',
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    const packageJSON = JSON.parse(readFileSync('./package.json', 'utf-8'));

    return mergeConfig(config, {
      define: {
        __STYLEGUIDE_COMPONENTS_CONFIG__: JSON.stringify(getStyleGuideComponents()),
        __STYLEGUIDE_URL__: JSON.stringify(packageJSON.homepage),
        __COMPONENTS_SOURCE_BASE_URL__: JSON.stringify(
          `${packageJSON.repository.url.replace('.git', '')}/tree/master/${packageJSON.repository.directory}`,
        ),
      },
      css: {
        postcss: {
          plugins: [
            cssImport(),

            restructureVariable(
              [
                './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css',
              ].map((pathSegment) => path.join(rootDirectory, pathSegment)),
            ),

            // Сбор данных для работы некоторых postcss плагинов
            postcssGlobalData({
              files: [
                './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
                'packages/vkui/src/styles/dynamicTokens.css',
                'packages/vkui/src/styles/constants.css',
                'packages/vkui/src/styles/customMedias.generated.css',
              ].map((pathSegment) => path.join(rootDirectory, pathSegment)),
            }),

            // Автопрефиксер
            autoprefixer(),

            // Обработка CustomMedia
            postcssCustomMedia(),

            // TODO [>=8]: Проверить браузерную поддержку
            //
            // https://caniuse.com/mdn-css_properties_gap_grid_context
            postcssGapProperties(),
          ],
        },
      },
    });
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
