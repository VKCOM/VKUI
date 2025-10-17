import path from 'node:path';
import postcssGlobalData from '@csstools/postcss-global-data';
import layoutClasses from '@project-tools/postcss-layout-classes';
import restructureVariable from '@project-tools/postcss-restructure-variable';
import autoprefixer from 'autoprefixer';
import postcssCustomMedia from 'postcss-custom-media';
import postcssGapProperties from 'postcss-gap-properties';
import cssImport from 'postcss-import';
import { type InlineConfig } from 'vite';
import tsconfig from './tsconfig.json' with { type: 'json' };

const rootDirectory = path.join(import.meta.dirname, '../..');

const TS_CONFIG_ALIASES = Object.entries(tsconfig.compilerOptions.paths).reduce<
  Record<string, string>
>((aliases, [name, paths]) => {
  aliases[name] = path.join(import.meta.dirname, paths[0]);
  return aliases;
}, {});

// eslint-disable-next-line import/no-default-export -- требование vitetest
export default {
  build: { commonjsOptions: { include: [/node_modules/, /\.js/] }, sourcemap: false },

  resolve: { alias: TS_CONFIG_ALIASES },

  css: {
    postcss: {
      plugins: [
        // Обработка css импортов
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

        layoutClasses(),

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
} satisfies InlineConfig;
