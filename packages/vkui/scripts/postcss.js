const path = require('path');
const postcssGlobalData = require('@csstools/postcss-global-data');
const restructureVariable = require('@project-tools/postcss-restructure-variable');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomMedia = require('postcss-custom-media');
const cssImport = require('postcss-import');
const cssModules = require('postcss-modules');
const { VKUI_PACKAGE, VKUI_TOKENS_CSS, generateScopedName } = require('../../../shared');

const rootDirectory = path.join(__dirname, '../../..');

/**
 * Конфигурация postcss плагинов
 * @param {Object} config - Конфигурация.
 * @param {boolean | undefined} config.isVKUIPackageBuild - Сборка пакета.
 * @param {boolean | undefined} config.isProduction - Продакшн сборка.
 * @param {boolean | undefined} config.isCssModulesFile - Сборка module.css файлов.
 * @param {boolean | undefined} config.isESNext - Отдельная сборка cssm.
 * @returns {import('postcss').Plugin[]}
 */
function makePostcssPlugins({
  isVKUIPackageBuild = false,
  isProduction = process.env.NODE_ENV === 'production',
  isCssModulesFile = false,
  isESNext = false,
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

  // Обработка css modules. Добавляет префикс vkui
  if (isVKUIPackageBuild && isCssModulesFile && !isESNext) {
    plugins.push(
      cssModules({
        generateScopedName,
        getJSON: () => void 0,
      }),
    );
  }

  // Уменьшение размера для продакшен сборки
  if (isProduction && !isESNext) {
    plugins.push(
      cssnano({
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
      }),
    );
  }

  return plugins;
}

module.exports = {
  makePostcssPlugins,
};
