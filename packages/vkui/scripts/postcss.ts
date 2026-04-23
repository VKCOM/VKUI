import * as path from 'node:path';
import postcssGlobalData from '@csstools/postcss-global-data';
import layoutClasses from '@project-tools/postcss-layout-classes';
import restructureVariable from '@project-tools/postcss-restructure-variable';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import type { AcceptedPlugin } from 'postcss';
import postcssCustomMedia from 'postcss-custom-media';
import postcssGapProperties from 'postcss-gap-properties';
import cssImport from 'postcss-import';
import postcssLogical from 'postcss-logical';
import cssModules from 'postcss-modules';

const rootDirectory = path.join(import.meta.dirname, '../../..');

interface MinimizerOptions {
  preset: [
    'default',
    {
      calc: boolean;
      discardEmpty: boolean;
    },
  ];
}

function getMinimizerOptions(isVKUIPackageBuild = false): MinimizerOptions {
  return {
    preset: [
      'default',
      {
        // Отключаем из-за того, что `postcss-calc` меняет порядок операндов при умножении -1 на переменную
        // Подробности здесь https://github.com/VKCOM/VKUI/issues/2963
        calc: false,
        // Включаем если собираем пакет @vkontakte/vkui.
        // В остальных кейсах пустые CSS блоки удаляются раньше, чем их обработает
        // `css-loader` с настройками для CSS Modules.
        // Подробности здесь https://github.com/webpack-contrib/css-loader/issues/266
        discardEmpty: isVKUIPackageBuild,
      },
    ],
  };
}

interface MakePostcssPluginsConfig {
  isVKUIPackageBuild?: boolean;
  isProduction?: boolean;
  isCssModulesFile?: boolean;
  isESNext?: boolean;
  isStorybook?: boolean;
  disableMinimizer?: boolean;
}

/**
 * Конфигурация postcss плагинов
 */
function makePostcssPlugins({
  isVKUIPackageBuild = false,
  isProduction = process.env.NODE_ENV === 'production',
  isCssModulesFile = false,
  isESNext = false,
  isStorybook = process.env.SANDBOX === '.storybook',
  disableMinimizer = false,
}: MakePostcssPluginsConfig = {}): AcceptedPlugin[] {
  const plugins: AcceptedPlugin[] = [
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
  ];

  // Обработка CSS Logical
  //
  // https://caniuse.com/css-logical-props
  if (!isESNext && !isStorybook) {
    plugins.push(postcssLogical());
  }

  // Обработка css modules. Добавляет префикс vkui
  if (isVKUIPackageBuild && isCssModulesFile && !isESNext) {
    plugins.push(
      cssModules({
        generateScopedName: 'vkui[folder]__[local]',
        getJSON: () => void 0,
      }),
    );
  }

  // TODO [>=9]: Проверить браузерную поддержку
  //
  // https://caniuse.com/mdn-css_properties_gap_grid_context
  if (!isESNext) {
    plugins.push(postcssGapProperties());
  }

  // Уменьшение размера для продакшен сборки
  if (!disableMinimizer && isProduction && !isESNext) {
    plugins.push(cssnano(getMinimizerOptions(isVKUIPackageBuild)));
  }

  return plugins;
}

export { getMinimizerOptions, makePostcssPlugins };
export type { MinimizerOptions, MakePostcssPluginsConfig };
