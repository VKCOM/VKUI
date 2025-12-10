const path = require('path');
const postcssGlobalData = require('@csstools/postcss-global-data');
const layoutClasses = require('@project-tools/postcss-layout-classes');
const restructureVariable = require('@project-tools/postcss-restructure-variable');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomMedia = require('postcss-custom-media');
const postcssGapProperties = require('postcss-gap-properties');
const cssImport = require('postcss-import');
const postcssLogical = require('postcss-logical');
const cssModules = require('postcss-modules');

const rootDirectory = path.join(__dirname, '../../..');

function getMinimizerOptions(isVKUIPackageBuild = false) {
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

/**
 * Конфигурация postcss плагинов
 * @param {Object} config - Конфигурация.
 * @param {boolean} [config.isVKUIPackageBuild=false] Сборка пакета.
 * @param {boolean} [config.isProduction=process.env.NODE_ENV === 'production'] Продакшн сборка.
 * @param {boolean} [config.isCssModulesFile=false] Сборка module.css файлов.
 * @param {boolean} [config.isESNext=false] Отдельная сборка cssm.
 * @param {boolean} [config.isStorybook=process.env.SANDBOX === '.storybook'] Отдельная сборка cssm.
 * @param {boolean} [config.disableMinimizer=false] Отключает cssnano.
 * @returns {import('postcss').Plugin[]}
 */
function makePostcssPlugins({
  isVKUIPackageBuild = false,
  isProduction = process.env.NODE_ENV === 'production',
  isCssModulesFile = false,
  isESNext = false,
  isStorybook = process.env.SANDBOX === '.storybook',
  disableMinimizer = false,
} = {}) {
  const plugins = [
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

  // TODO [>=8]: Проверить браузерную поддержку
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

module.exports = {
  getMinimizerOptions,
  makePostcssPlugins,
};
