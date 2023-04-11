const fs = require('fs');
const path = require('path');
const postcssGlobalData = require('@csstools/postcss-global-data');
const restructureVariable = require('@project-tools/postcss-restructure-variable');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssCustomMedia = require('postcss-custom-media');
const cssCustomProperties = require('postcss-custom-properties');
const cssImport = require('postcss-import');
const cssModules = require('postcss-modules');
const { VKUI_PACKAGE, VKUI_TOKENS_CSS, generateScopedName, getCustomMedias } = require('./shared');

function getSafelyTmpDirPath(rootPath = __dirname) {
  const tmpDir = path.join(rootPath, 'tmp');

  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }

  return tmpDir;
}

const customMediasPath = './tmp/customMedias.generated.css';

function generateCustomMedias() {
  const { customMedia } = getCustomMedias();

  getSafelyTmpDirPath();

  const data = Object.entries(customMedia)
    .map(([key, value]) => {
      return `@custom-media ${key} ${value};`;
    })
    .join('\n');

  fs.writeFileSync(path.join(__dirname, customMediasPath), data, { flag: 'w' });
}

generateCustomMedias();

module.exports = (ctx) => {
  const plugins = [
    cssImport(),
    restructureVariable(VKUI_TOKENS_CSS.map((pathSegment) => path.join(__dirname, pathSegment))),
    postcssGlobalData({
      files: [
        './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
        VKUI_PACKAGE.PATHS.CSS_CONSTANTS,
        customMediasPath,
      ].map((pathSegment) => path.join(__dirname, pathSegment)),
    }),
    cssCustomProperties({
      preserve: true,
      disableDeprecationNotice: true,
    }),
    autoprefixer(),
    postcssCustomMedia(),
  ];

  // Обрабатываем только при сборке библиотеки.
  if (!ctx.options.isSandbox) {
    plugins.push(
      cssModules({
        generateScopedName,
        getJSON: () => void 0,
      }),
    );
  }

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
      cssnano({
        preset: [
          'default',
          {
            // Отключаем из-за того, что `postcss-calc` меняет порядок операндов при умножении -1 на переменную
            // Подробности здесь https://github.com/VKCOM/VKUI/issues/2963
            calc: false,
            // Отключаем для webpack-сборки песочницы, т.к. пустые CSS блоки удаляются раньше, чем их обработает
            // `css-loader` с настройками для CSS Modules
            // Подробности здесь https://github.com/webpack-contrib/css-loader/issues/266
            discardEmpty: !ctx.options.isSandbox,
          },
        ],
      }),
    );
  }

  return { plugins };
};

module.exports.generateCustomMedias = generateCustomMedias;
module.exports.customMediasPath = customMediasPath;
