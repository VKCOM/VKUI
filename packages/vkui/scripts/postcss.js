const path = require('path');
const postcssGlobalData = require('@csstools/postcss-global-data');
const restructureVariable = require('@project-tools/postcss-restructure-variable');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomMedia = require('postcss-custom-media');
const postcssGapProperties = require('postcss-gap-properties');
const cssImport = require('postcss-import');
const postcssLogical = require('postcss-logical');
const cssModules = require('postcss-modules');
const { VKUI_PACKAGE, VKUI_TOKENS_CSS, generateScopedName } = require('../../../shared');

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
 * @param {boolean | undefined} config.isVKUIPackageBuild - Сборка пакета.
 * @param {boolean | undefined} config.isProduction - Продакшн сборка.
 * @param {boolean | undefined} config.isCssModulesFile - Сборка module.css файлов.
 * @param {boolean | undefined} config.isESNext - Отдельная сборка cssm.
 * @param {boolean | undefined} config.disableMinimizer - Отключает cssnano.
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
      VKUI_TOKENS_CSS.map((pathSegment) => path.join(rootDirectory, pathSegment)),
    ),

    // Сбор данных для работы некоторых postcss плагинов
    postcssGlobalData({
      files: [
        './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
        VKUI_PACKAGE.PATHS.CSS_DYNAMIC_TOKENS,
        VKUI_PACKAGE.PATHS.CSS_CONSTANTS,
        VKUI_PACKAGE.PATHS.CSS_CUSTOM_MEDIAS,
      ].map((pathSegment) => path.join(rootDirectory, pathSegment)),
    }),

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
        generateScopedName,
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
