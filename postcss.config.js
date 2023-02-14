const fs = require('fs');
const path = require('path');
const postcssGlobalData = require('@csstools/postcss-global-data');
const cssCustomProperties = require('postcss-custom-properties');
const restructureVariable = require('@project-tools/postcss-restructure-variable');
const cssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssModules = require('postcss-modules');
const cssnano = require('cssnano');
const checkKeyframes = require('@project-tools/postcss-check-keyframes');
const { VKUI_PACKAGE, generateScopedName, getCustomMedias } = require('./shared');
const postcssCustomMedia = require('postcss-custom-media');

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
    checkKeyframes({
      importFrom: path.join(__dirname, VKUI_PACKAGE.PATHS.CSS_ANIMATIONS),
    }),
    restructureVariable(
      [
        './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css',
        './node_modules/@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css',
      ].map((pathSegment) => path.join(__dirname, pathSegment)),
    ),
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
    cssModules({
      generateScopedName: ctx.options.isSandbox ? (name) => name : generateScopedName,
      getJSON: () => void 0,
    }),
    postcssCustomMedia(),
  ];

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
